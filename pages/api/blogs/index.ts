import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
import { BlogForList } from '../../../types/blog'

const handler = async (req: NextApiRequest, res: NextApiResponse<BlogForList[]>) => {

    const result = await prisma.blog.findMany({
        where: {}
    })
    res.status(200).json(result)
}

export default handler;