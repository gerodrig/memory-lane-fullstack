import type { NextApiRequest, NextApiResponse } from 'next';

import { db } from 'database/';
import {BlogPost as Blog} from 'models/';
import { BlogPost } from 'interfaces';


type Data = 
| {message: string}
| BlogPost[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if( process.env.NODE_ENV !== 'development' ) {
        return res.status(401).json({ message: 'Not allowed' })
    }

    switch (req.method) {
        case 'GET':
            return getBlogs(req, res);

        default:
            return res.status(405).json({ message: 'Bad Request' });
    }
}

const getBlogs = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    await db.connect();
    const blogs = await Blog.find({}).select('-__v').lean().exec();
    await db.disconnect();

     blogs.forEach((blog: any) => {
        blog.id = blog._id?.toString();
        delete blog._id;
    });

    return res.status(200).json(blogs);
};