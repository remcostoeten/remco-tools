export default async (req, res) => {
    if (req.method === 'GET') {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        
        res.status(200).json({ message: 'test' });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
};

