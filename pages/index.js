import { useRouter } from "next/router"
import { useEffect } from "react"
import Couple from "../components/couple/couple"
import Gifts from "../components/gifts/gifts"
import Layout from "../components/layout/layout"
import Location from "../components/location/location"
import MessageCarrousel from "../components/message-carrousel/messageCarrousel"
import Message from "../components/message/message"
import TimeToWedding from "../components/time-to-wedding/timeToWedding"
import Welcome from "../components/welcome/welcome"
import { getPaymentInfo } from "../lib/paymentInfo"
import { getSessionCookieState } from "../lib/sessionCookie"

import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer } from "react-toastify"

function Home({ verified, paymentInfo }) {
  const router = useRouter();

  useEffect(() => {
    if (verified === false) {
      router.push('/verification');
    }
  }, [router, verified]);

  return (
    <>
      <Layout>
        {verified && (
          <>
            <Welcome />
            <Couple />
            <Gifts paymentInfo={paymentInfo} />
            <Message />
            <MessageCarrousel />
            <br /> {/* Aqui vai o componente de info de vestimentas */}
            <Location />
            <TimeToWedding />
          </>
        )}
      </Layout>
      <ToastContainer 
        position="top-center"
        closeButton={false}
        pauseOnFocusLoss
        closeOnClick
        hideProgressBar
      />
    </>
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
