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
            <h2>Securing information</h2>
            <p>FunLearn is committed to protecting your privacy and we comply fully with UK and EU data protection law (GDPR). We have put in place physical, electronic and operational procedures intended to safeguard and secure the information we collect. All FunLearn staff have a legal duty to respect the confidentiality of your information, and access to your personal details is restricted only to those who have a reasonable need to access it.</p>
            <p>When using the FunLearn website, if the URL of a web page starts with HTTPS, or you see a locked/green padlock symbol, your data is encrypted when it is sent from your computer to our server.</p>

            <h2>Information we may hold about you</h2>
            <p>When you sign up to FunLearn, the information we hold about you includes the following:</p>
            <ul>
                <li>name</li>
                <li>email address</li>
                <li>any other contact information you chose to enter in your account</li>
            </ul>
            <p>We will only keep your personal information for as long as is necessary and in accordance with UK law.</p>
            <p>Note that FunLearn does not collect or store any personal information about students using the website.</p>

            <h2>How we may use your information</h2>
            <p>We use your personal information to provide you with our services, and to improve and extend our services. This may include:</p>
            <ul>
                <li>providing you with information, products or services that you requested from us</li>
                <li>sending service-related information</li>
                <li>contacting you to give you an opportunity to complete a customer satisfaction survey</li>
                <li>disclosing your personal data in order to comply with any legal obligation</li>
            </ul>
            <p>To stop receiving information by email, simply click on the 'Unsubscribe' link at the bottom of any of our newsletters. Note that, by doing so, you may miss important service updates and notifications about new features and special offers.</p>

            <h2>Where your personal information is stored</h2>
            <p>Your username (usually the email you signed up with) and password are stored in a secured, encrypted database hosted by FunLearn's server partners. You may choose to add extra information to your profile, such as first and last name, but no other personal, identifying information is stored by FunLearn.</p>

            <h2>Sharing information</h2>
            <p>FunLearn does not share personal information with third parties. We may however disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>

            <h2>Use of cookies</h2>
            <p>A cookie, also known as a browser cookie, is a text file containing small amounts of information which a server may download to your computer or device when you visit a website or use an app. The purpose of cookies is to let you navigate between different pages on the website efficiently, remembering preferences you have given (e.g. language selection). Cookies are also used to measure the number of site visits and the most popular pages users visit. The cookies that FunLearn uses do not collect personal information such as name, address, email address and do not link any information they collect to an individual.</p>

            <h2>Updating this Privacy Policy</h2>
            <p>We may review and update this notice to comply with the latest legislation. The up-to-date copy of this policy can be found on this web page.</p>

            <h2>Updating your details</h2>
            <p>If you have any questions or queries regarding this privacy policy, please contact us via the app. If any of the information that you have provided to FunLearn changes, simply update your details in the My Account section after you've logged in.</p>

            <Link href='/'>
                <a><button>Back home</button></a>
            </Link>
            <Footer />
        </div>
    )
}