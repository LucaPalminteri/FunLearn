import Link from 'next/dist/client/link';
import { Auth0Provider } from "@auth0/auth0-react";

export default function Header() {
    return (
        <header className='header'>
            <Link href={'/'}>
                <a>
                    <h1>FunLearn</h1>
                </a>
            </Link>
        </header>
    )
}