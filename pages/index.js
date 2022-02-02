import Head from "next/head"
import Couple from "../components/couple/couple"
import Layout from "../components/layout/layout"
import SaveTheDate from "../components/save-the-date/save-the-date"
import Welcome from "../components/welcome/welcome"

export default function Home() {
  return (
    <>
      <Head>
        <title>Mari &amp; Ari</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Casamento Mariana e Archimedes" />
      </Head>
      <Layout>
        <Welcome />
        <Couple />
        <SaveTheDate />
      </Layout>
    </>
  )
}
