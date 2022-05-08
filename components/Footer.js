import Link from 'next/dist/client/link';

export default function Footer() {
    return (
        <div className='footer'>
            <h1>Footer</h1>
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
            <h3>Copyright © FunLearn {new Date().getFullYear()}</h3>
        </div>
    )
}