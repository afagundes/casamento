import Couple from "../components/couple/Couple"
import Layout from "../components/layout/Layout"
import Location from "../components/location/Location"
import TimeToWedding from "../components/time-to-wedding/TimeToWedding"

import Welcome from "../components/welcome/Welcome"

export default function Home() {
  return (
    <Layout>
      <Welcome />
      <Couple />
      <Location />
      <TimeToWedding />
    </Layout>
  )
}
