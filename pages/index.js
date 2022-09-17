import Head from 'next/head';

import Header from "../components/Header"
import NewsCard from "../components/NewsCard"
import Footer from "../components/Footer"


export default function Home() {

  return (
    <>
      <Head>
        <title>Falcon Ace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <NewsCard/>
      <Footer/>
    </>

  )
}
