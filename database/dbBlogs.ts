const {isValidObjectId} = require('mongoose');
import {db } from '.';
import Blog from 'models/BlogPost';
import { BlogPost } from 'interfaces';


export const getAllBlogs = async (): Promise<BlogPost[]> => {

    await db.connect();
    const blogs = await Blog.find({}).select('-__v').lean().exec();
    await db.disconnect();

    blogs.forEach((blog: any) => {
        blog.id = blog._id?.toString();
        delete blog._id;
    });

    return JSON.parse(JSON.stringify(blogs));
};

export const getBlogById = async (id: string): Promise<BlogPost | null> => {

    if ( !isValidObjectId(id) ){
        return null;
    }

    await db.connect();
    const blog = await Blog.findById(id).select('-__v').lean().exec() as any;
    await db.disconnect();

    if(!blog) return null;

    blog.id = blog._id?.toString();
    delete blog._id;

    return JSON.parse(JSON.stringify(blog));


}