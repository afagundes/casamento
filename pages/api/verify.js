import { setCookieVerified } from "../../lib/sessionCookie";

export default async function verify(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }

    const code = process.env.VERIFICATION_CODE;
    const userCode = req.body;

    if (code === userCode) {
        setCookieVerified(req, res);
        res.status(200).end();
    }
    else {
        res.status(403).end();
    }
}
