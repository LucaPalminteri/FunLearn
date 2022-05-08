import Head from 'next/head'
import Link from 'next/dist/client/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutUs() {
    return (
        <div>
            <Head>
                <title>About Us</title>
            </Head>
            <Header />
            <h1>About Us</h1>
            <Link href='/'>
                <a><button>Back home</button></a>
            </Link>
            <Footer />
        </div>
    )
}