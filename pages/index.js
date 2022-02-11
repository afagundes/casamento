import Cookies from "cookies"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Couple from "../components/couple/Couple"
import Layout from "../components/layout/Layout"
import Location from "../components/location/Location"
import TimeToWedding from "../components/time-to-wedding/TimeToWedding"

import Welcome from "../components/welcome/Welcome"

function Home({ verified }) {
  const router = useRouter();

  useEffect(() => {
    if (verified === false) {
      router.push('/verification');
    }
  }, [router]);

  return (
    <Layout>
      {verified && (
        <>
          <Welcome />
          <Couple />
          <Location />
          <TimeToWedding />
        </>
      )}
    </Layout>
  )
}

Home.getInitialProps = async (ctx) => {
  const cookies = new Cookies(ctx.req, ctx.res);
  const verified = cookies.get('verified') === 'true' || false;

  return {
    verified: verified
  }
}

export default Home;