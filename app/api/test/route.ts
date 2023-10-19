// @ts-ignore
// @ts-nocheck
import { NextApiRequest, NextApiResponse } from 'next';
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        res.status(200).json({ message: 'test' });
    } else {
        res.status(405).end();
    }
}