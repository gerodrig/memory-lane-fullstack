// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

type Data = {
  name?: string;
  email?: string;
  message?: string;
  subject?: string;
  phone?: string;
  success?: boolean;
  error?: Error | unknown;
};

dotenv.config();

const { SG_API_KEY, FROM_EMAIL, TO_EMAIL} = process.env;
console.log(SG_API_KEY, FROM_EMAIL, TO_EMAIL);

sgMail.setApiKey(SG_API_KEY || '');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, message, phone, subject } = req.body as Data;

  const msg = {
    to: TO_EMAIL || 'Not Provided',
    from: FROM_EMAIL || 'Not Provided',
    subject: subject || `New message from ${name}`,
    html: `<p><strong>Name: </strong>${name}</p>
    <p><strong>Email: </strong>${email}</p>
    <p><strong>Phone: </strong>${phone || 'Not provided'}</p>
    <p><strong>Message: </strong>${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true });
  }
  catch (error ) {
    console.log(error);
    res.status(400).json({error});
  }


}
