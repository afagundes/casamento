import Cookies from "cookies";

function getSessionCookieState(ctx) {
    const cookies = new Cookies(ctx.req, ctx.res);
    const verified = cookies.get('verified') === 'true' || false;
  
    return {
        verified: verified
    }
}

function setCookieVerified(req, res) {
    const cookies = new Cookies(req, res);
    cookies.set('verified', 'true', { httpOnly: true, sameSite: true });
}

export { getSessionCookieState, setCookieVerified };