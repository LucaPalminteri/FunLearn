import Head from 'next/head'
import Link from 'next/dist/client/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutUs() {
    return (
        <div className='info'>
            <Head>
                <title>About Us</title>
            </Head>
            <Header />
            <div className='home__info'>

            <h1>About Us</h1>
            <p>Are you looking to create interactive learning games but have no time to learn how? With FunLearn, you can create engaging activities in minutes. Just enter your words, or questions and answers and FunLearn turns your content into cool interactive games.</p>
            <p>Once you&#39;ve created an activity, a unique code is generated. Simply share that code with your students and they&#39;ll be able to play the game on their own device, in class, at home or even on the bus on the way to school. You can even embed the games into your own website if you want to.</p>
            <p>The games you create can be played on individual computers, tablets via the FunLearn app as well as on the interactive whiteboard.</p>
            <p>There are 8 types of games you can generate. Create a free account today and start building your bank of resources, or copy and adapt games shared by our community.</p>
            <p>You create, you share, they play. It&#39;s as simple as that!</p>
            <Link href='/'>
                <a><button>Back home</button></a>
            </Link>
            </div>
            <Footer />
        </div>
    )
}