import type { NextApiRequest, NextApiResponse } from 'next'
import { isStringObject } from 'util/types';
import prisma from '../../../lib/prisma';
import { Blog } from '../../../types/blog'

type Error = {
    Detail: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Blog | Error>) => {

    const { pid } = req.query;
    const blogID = isStringObject(pid) ? parseInt(pid) : parseInt(pid[0])
    
    const result = await prisma.blog.findUnique({
        where: {
            id: blogID
        }
    });

    if(!result) res.status(400).json({Detail: "Blog with this ID not found"})
    else res.status(200).json(result)
};

export default handler;