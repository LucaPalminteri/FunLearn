import Link from 'next/dist/client/link';

export default function Footer() {
    return (
        <footer className='footer'>
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
        </footer>
    )
}