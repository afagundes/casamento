export default function message(req, res) {
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

function handleGetMessages(res) {
    res.status(200).json({ message: 'OK' });
}

function handlePostMessage(req, res) {
    const formMessage = JSON.parse(req.body);

    console.log(formMessage.name);
    console.log(formMessage.message);

    res.status(201).end();
}
