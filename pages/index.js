import Cookies from "cookies"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Couple from "../components/couple/couple"
import Gifts from "../components/gifts/gifts"
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
  }, [router, verified]);

  return (
    <Layout>
      {verified && (
        <>
          <Welcome />
          <Couple />
          <Gifts />
          <br /> {/* TODO aqui vai o componente de mensagens */}
          <Location />
          <TimeToWedding />
        </>
      )}
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const cookies = new Cookies(ctx.req, ctx.res);
  const verified = cookies.get('verified') === 'true' || false;

  return {
    props: {
      verified: verified
    }
  }
}

export default Home;
