import Head from 'next/head'
import HomePage from '../components/Home/HomePage/HomePage'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Clothing Wholesale</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePage />
      </main>
    </div>
  )
}
