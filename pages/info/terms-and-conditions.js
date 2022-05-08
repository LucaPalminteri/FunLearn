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
            <p>Please read this agreement carefully before accessing or using the FunLearn website. These Terms and Conditions are designed to ensure that you and your students have a safe and enjoyable experience with FunLearn. The information and services on the FunLearn website are provided by FunLearn subject to your agreement to the Terms and Conditions below.</p>

            <h2>DESCRIPTION OF SERVICE</h2>
            <p>FunLearn is an online service that allows you to create a bank of word lists, matching pairs, and quiz questions which you can use in a range of interactive activities. In your account you build up a personalised library of activities, which are sorted by topic areas of your choosing. You can also make your lists public so that other users can search for them and use them in their classes.</p>

            <h2>ACCESS</h2>
            <p>Each teacher with an account can create activities and publish them online. Students can access each activity through a unique code they enter online or in the app, without the need to create an account. Teachers are free to use and share the activities they have exported without limitations.</p>

            <h2>SUBSCRIPTION FEE</h2>
            <p>All subscriptions will be pre-paid annually. FunLearn reserves the right to change the amount of any fees or charges for the FunLearn service, and to institute new fees by posting such changes on the FunLearn website.</p>

            <h2>LOGIN DETAILS</h2>
            <p>Your access to the service is by username and password. Each individual teacher has their own login details. There are no student accounts as students can access the material using a unique code issued by their teacher for each activity.</p>

            <h2>COPYRIGHTS</h2>
            <p>All materials contained on the FunLearn website (as well as the organisation, colour scheme and layout of the site), are owned and copyrighted by FunLearn. No part of the website can be copied.</p>

            <h2>CHANGES TO THE SITE</h2>
            <p>FunLearn may make improvements or changes in the information, services, products, and other materials on the FunLearn website, or terminate the service or part of the service, at any time without notice. FunLearn may modify this agreement at any time, and such modifications shall be effective immediately upon posting of the modified agreement. Accordingly, you agree to review the agreement periodically, and your continued access or use of this site shall be deemed your acceptance of the modified agreement.</p>

            <h2>USER CONTRIBUTIONS</h2>
            <p>FunLearn includes content (lists of words, matching pairs, or quiz questions) submitted by users. We do not make any representation as to the suitability or accuracy of such content. Users agree that they will not input content protected by intellectual property laws unless they own or control all of the rights thereto or have received all necessary consents. If you have reason to believe that a submitted resource is infringing any copyright, you must immediately inform us via the app.</p>
            <p>Content that is deemed offensive, inappropriate or illegal in any way is strictly prohibited. FunLearn accepts no responsibility for any content posted by users, but reserves the right in its sole discretion to remove any material submitted to or appearing on this site, and refuse access to the site to any user that violates this agreement. By submitting material, you agree to indemnify, defend and hold harmless FunLearn from any liability, loss, claim and expense (including legal fees) related to your violation of this agreement.</p>

            <h2>DISCLAIMERS</h2>
            <p>Because of the nature of the service, FunLearn does not warrant that it will be uninterrupted and available at all times. We will not be liable if we are unable to perform our obligations under these Terms and Conditions due to the failure of any machine, data processing system or transmission link or to any circumstances beyond our control. We will not be liable for the accidental deletion or failure to store any data or other content you have uploaded on the FunLearn website.</p>
            <p>Because we do not have control over your local Internet connection and computer specifications and settings, we make no warranty or representation that you will be able to access all parts of the website reliably. Technical support is available through our online trouble-shooting page, but FunLearn cannot provide personalised technical support. Advice and help should be sought from your ICT technician before you subscribe to the service to make sure that your network and Internet connection meet the technical requirements.</p>

            <h2>REMEDIES FOR BREACH</h2>
            <p>In the event that FunLearn determines, in its sole discretion, that you have breached any portion of these Terms and Conditions, or have otherwise demonstrated inappropriate conduct, FunLearn reserves the right to suspend or terminate your account with FunLearn. We can terminate your account at any time without prior notice if you commit a breach of these Terms and Conditions.</p>

            <h2>TERMS OF USE</h2>
            <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Disputes arising here from shall be exclusively subject to the jurisdiction of the courts of England and Wales. If these Terms and Conditions are not accepted in full, you should not access or use the service.</p>


            <Link href='/'>
                <a><button>Back home</button></a>
            </Link>
            <Footer />
        </div>
    )
}