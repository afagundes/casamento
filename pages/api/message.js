import prisma from "../../lib/prisma";

export default async function message(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            handleGetMessages(res);
            break;
        case 'POST':
            handlePostMessage(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}

// GET /api/message
async function handleGetMessages(res) {
    try {
        const messages = await prisma.message.findMany();
        res.status(200).json(messages);
    }
    catch (e) {
        console.error("Error fetching messages from database", e);
        res.status(500).json({ error: "Error fetching messages" });
    }
}

// POST /api/message
// Required fields in body: name, message
async function handlePostMessage(req, res) {
    const { name, message } = req.body;

    try {
        /*const result = await prisma.message.create({
            data: {
                name: name,
                content: message
            }
        });*/

        const result = [];

        res.status(201).json(result);
    }
    catch (e) {
        console.error("Error creating new message", e);
        res.status(500).json({ error: "Error creating new message" });
    }
}
