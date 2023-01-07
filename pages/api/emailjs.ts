// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';

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

const {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_API,
  EMAILJS_ACCESS_TOKEN
} = process.env;
console.log(
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_API,
  EMAILJS_ACCESS_TOKEN
);


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, message, phone, subject } = req.body as Data;

  const data = {
    service_id: EMAILJS_SERVICE_ID,
    template_id: EMAILJS_TEMPLATE_ID,
    user_id: EMAILJS_PUBLIC_KEY,
    accessToken: EMAILJS_ACCESS_TOKEN,
    template_params: {
      name,
      email,
      message,
      subject,
    },
  };
  try {
    const response = await fetch(EMAILJS_API || '', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response) {
      console.log(response);
      return res.status(200).json({ success: true });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
}
