import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/dist/client/link';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className='home'>
      <Head>
        <title>FunLearn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1>FunLearn</h1>
      <h3>A place where you can play and learn</h3>

      <hr />

      <h2>Games</h2>
      <Link href='/games/TicToe'>
        <a>Tic Tac Toe</a>
      </Link>
      {' - '}
      <Link href='/games/Quiz'>
        <a>Quiz</a>
      </Link>
      {' - '}
      <Link href='/games/Pyramid'>
        <a>Numerical Pyramid</a>
      </Link>
      {' - '}
      <Link href='/games/Memory'>
        <a>Memory</a>
      </Link>
      {' - '}
      <Link href='/games/Anagram'>
        <a>Anagram</a>
      </Link>

      <Footer />
    </div>
  )
}
