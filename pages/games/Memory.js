import Head from 'next/head'
import Link from 'next/dist/client/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Memory() {
    return (
        <div className='memory game'>
            <Head>
                <title>Memory</title>
            </Head>
            <Header />
            <h2>Memory</h2>
            <Link href='/'>
                <a>Back home</a>
            </Link>
            <Footer/>
        </div>
    )
}