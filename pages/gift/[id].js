import { useRouter } from "next/router";

export default function GiftCheckout() {
    const router = useRouter();
    const { id } = router.query;

    return <div>Seja bem-vindo à página de número {id}</div>
}
