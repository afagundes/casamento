import Cookies from "cookies"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Couple from "../components/couple/couple"
import Layout from "../components/layout/layout"
import Location from "../components/location/location"
import TimeToWedding from "../components/time-to-wedding/timeToWedding"

import Welcome from "../components/welcome/welcome"

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