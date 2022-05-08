import Head from 'next/head'
import Link from 'next/dist/client/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsAndConditions() {
    return (
        <div>
            <Head>
                <title>Terms and Conditions</title>
            </Head>
            <Header />
            <h1>Terms and Conditions</h1>
            <Link href='/'>
                <a><button>Back home</button></a>
            </Link>
            <Footer />
        </div>
    )
}