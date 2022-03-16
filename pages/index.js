import { useRouter } from "next/router"
import { useEffect } from "react"
import Couple from "../components/couple/couple"
import Gifts from "../components/gifts/gifts"
import Layout from "../components/layout/layout"
import Location from "../components/location/location"
import Message from "../components/message/message"
import TimeToWedding from "../components/time-to-wedding/timeToWedding"
import Welcome from "../components/welcome/welcome"
import { getPaymentInfo } from "../lib/paymentInfo"
import { getSessionCookieState } from "../lib/sessionCookie"

function Home({ verified, paymentInfo }) {
  const router = useRouter();

  useEffect(() => {
    if (verified === false) {
      router.push('/verification');
    }
  }, [router, verified]);

  return (
    <Layout>
      {verified && (
        <>
          <Welcome />
          <Couple />
          <Gifts paymentInfo={paymentInfo} />
          <Message />
          <Location />
          <TimeToWedding />
        </>
      )}
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const cookieVerified = getSessionCookieState(ctx);
  const paymentInfo = getPaymentInfo();

  return {
    props: {
      ...cookieVerified,
      ...paymentInfo
    }
  }
}

export default Home;
