import Cookies from "cookies";

export default async function verify(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Método não permitido' });
    }

    const code = process.env.VERIFICATION_CODE;
    const userCode = req.body;

    if (code === userCode) {
        setCookieVerified(req, res);
        res.status(200).json({ message: 'Código validado' });
    }
    else {
        res.status(403).json({ message: 'O código informado é inválido.' });
    }
}

function setCookieVerified(req, res) {
    const cookies = new Cookies(req, res);
    cookies.set('verified', 'true', { httpOnly: true });

}