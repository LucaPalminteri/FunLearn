import Head from 'next/head'
import Link from 'next/dist/client/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
    return (
        <div>
            <Head>
                <title>Privacy Policy</title>
            </Head>
            <Header />
            <h1>Privacy Policy</h1>
            <Link href='/'>
                <a><button>Back home</button></a>
            </Link>
            <Footer />
        </div>
    )
}