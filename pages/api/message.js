import prisma from "../../lib/prisma";

export default async function message(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            await handleGetMessages(res);
            break;
        case 'POST':
            await handlePostMessage(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}

// GET /api/message
async function handleGetMessages(res) {
    try {
        let messages = await prisma.message.findMany();
        messages = shuffle(messages);

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
        const result = await prisma.message.create({
            data: {
                name: name,
                content: message
            }
        });

        res.status(201).json(result);
    }
    catch (e) {
        console.error("Error creating new message", e);
        res.status(500).json({ error: "Error creating new message" });
    }
}

// Fisher Yates shuffle
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
    }

    return arr;
}