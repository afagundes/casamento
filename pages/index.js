import { useRouter } from "next/router"
import { useEffect, useState } from "react"
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
import Clothes from "../components/clothes/clothes"

function Home({ verified, paymentInfo }) {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(true);

  useEffect(() => {
    if (verified === false) {
      router.push('/verification');
      return;
    }

    const fetchMessages = async () => {
      setLoadingMessages(true);

      const response = await fetch('/api/message');
      const body = await response.json();

      if (!response.ok) {
          console.error(body);
          return [];
      }

      setMessages(body);
      setLoadingMessages(false);
    }

    fetchMessages();
  }, [router, verified]);

  const addMessageCallback = (message) => {
    setMessages(messages => [ message, ...messages ]);
  }

  return (
    <>
      <Layout>
        {verified && (
          <>
            <Welcome />
            <Couple />
            <Gifts paymentInfo={paymentInfo} />
            <Message addMessageCallback={addMessageCallback} />
            <MessageCarrousel loading={loadingMessages} messages={messages} />
            <Clothes />
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
