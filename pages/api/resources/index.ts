import type { NextApiRequest, NextApiResponse } from 'next'

import { db } from 'database/';
import { ResourceData } from 'models/';
import { ResourcesData } from '@interfaces/resources';

type Data = | {message: string}
| ResourcesData[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if( process.env.NODE_ENV !== 'development' ) {
        return res.status(401).json({ message: 'Not allowed' })
    }

    switch (req.method) {
        case 'GET':
            return getResources(req, res);

        default:
            return res.status(405).json({ message: 'Bad Request' });
    }

    res.status(200).json({ message: 'Example' })
}

const getResources = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    await db.connect();
    const resources = await ResourceData.find({}).select('-_id -__v').lean().exec();
    await db.disconnect();

    return res.status(200).json(resources);
}
