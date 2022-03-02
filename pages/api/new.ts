import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma';
import { Blog } from '../../types/blog';

type Response = {
    detail: string
  }

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
    const newBlog: Blog = req.body;
    console.log(newBlog)

    if(!newBlog.title || !newBlog.content || !newBlog.publishDate) {
        res.status(400).json({detail: "One of the parameters is missing. Please try again."});
    }
    else {
        const result = await prisma.blog.create({
            data: {...newBlog}
        });
        console.log(result);
        res.status(200).json({detail: "Blog created successfully"});
    }
}

export default handler;