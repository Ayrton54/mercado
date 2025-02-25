
export default function handler(req, res) {
    if (req.method === 'POST') {
        const { nome, endereco, cidade } = req.body;
        res.status(200).json({ nome, endereco, cidade });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}