import Link from 'next/dist/client/link';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__info">
            <div>
                <h3>About</h3>
                <nav>
                    <li>Our history</li>
                    <li>Careers</li>
                    <li>Blog</li>
                </nav>
            </div>
            <div>
                <h3>Teachers</h3>
                <nav>
                    <li>Why FunLearn</li>
                    <li>Try out our activities</li>
                    <li>Curricnava covered</li>
                </nav>
            </div>
            <div>
                <h3>Parents</h3>
                <nav>
                    <li>Why FunLearn</li>
                    <li>Try out our activities</li>
                    <li>First steps in FunLearn</li>
                </nav>
            </div>
            <div>
                <h3>Help</h3>
                <nav>
                    <li>Need help?</li>
                    <li>Contact us</li>
                    <li>FAQs</li>
                </nav>
            </div>
            </div>
            <div className='footer__bottom'> 
                <div className='info-container'>
                    <Link href={'/info/about-us'}>
                        <a>About Us</a>
                    </Link>
                    {' - '}
                    <Link href={'/info/terms-and-conditions'}>
                        <a>Terms and Conditions</a>
                    </Link>
                    {' - '}
                    <Link href={'/info/privacy-policy'}>
                        <a>Privacy Policy</a>
                    </Link>
                </div>
                <p>Copyright © FunLearn {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}