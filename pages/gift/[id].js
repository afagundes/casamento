import { PIX } from 'gpix/dist';
import { giftList } from '../../lib/gifts';
import Layout from "../../components/layout/layout";
import GiftCart from "../../components/gift-cart/giftCart";

export default function Gift({ gift, qrCode }) {
    return (
        <Layout>
            {gift ? <GiftCart gift={gift} qrCode={qrCode} /> : null }
        </Layout>
    );
}

export async function getServerSideProps(ctx) {
    const giftId = ctx.params.id;
    const gift = findGifyById(giftId);
    const qrCode = await generateQrCodeFromGiftPrice(gift);

    return {
        props: { 
            gift: gift,
            qrCode: qrCode
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
