import { PIX } from 'gpix/dist';
import { giftList } from '../../lib/gifts';
import Layout from "../../components/layout/layout";
import GiftCart from "../../components/gift-cart/giftCart";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getSessionCookieState } from '../../lib/sessionCookie';

export default function Gift({ verified, gift, qrCode }) {
    const router = useRouter();

    useEffect(() => {
      if (verified === false) {
        router.push('/verification');
      }
    }, [router, verified]);

    return (
        <Layout>
            {verified && gift ? <GiftCart gift={gift} qrCode={qrCode} /> : null }
        </Layout>
    );
}

export async function getServerSideProps(ctx) {
    const cookie = getSessionCookieState(ctx);

    if (cookie.verified === false) {
        return {
            props: {
                verified: false
            }
        }
    }

    const giftId = ctx.params.id;
    const gift = findGifyById(giftId);
    const qrCode = await generateQrCodeFromGiftPrice(gift);

    return {
        props: { 
            gift: gift,
            qrCode: qrCode,
            verified: true,
        }
    }
}

function findGifyById(giftId) {
    return giftList.find(gift => gift.id == giftId);
}

async function generateQrCodeFromGiftPrice(gift) {
    const pix = PIX.static()
        .setReceiverName(process.env.PIX_RECEIVER_NAME)
        .setReceiverCity(process.env.PIX_RECEIVER_CITY)
        .setKey(process.env.PIX_KEY)
        .setDescription('Presente de Casamento')
        .setAmount(gift.price);

    const qrCode = await pix.getQRCode();
    return qrCode;
}
