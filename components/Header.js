import { useState, useEffect } from 'react';
import Link from 'next/dist/client/link';
import { useUser } from '@auth0/nextjs-auth0'
import Image from 'next/image'


export default function Header() {

    const { user, error, isLoading } = useUser();

    console.log(isLoading);

    const [width, setWidth] = useState(0)
    const [showMenu,setShowMenu] = useState(true)

    useEffect(()=>{
        setWidth(window.innerWidth);
    },[])
    
    console.log(user);

    function toggleMenu() {
        setShowMenu(prev => !prev)
    }
      
    useEffect(()=>{
      if (width >= 900) setShowMenu(true)
      else if(width < 900) setShowMenu(false)
      function handleResize() {
        setWidth(window.innerWidth)
      }
      window.addEventListener('resize',handleResize)
    })

    return (
        <header className='header'>
            <Link href={'/'}>
                <a>
                    <h1>FunLearn</h1>
                </a>
            </Link>

            {showMenu ? 
            <nav className='header__navbar'>
                <span>Teachers</span>
                <span>Parents</span>
                <p className='language'>EN(US)</p>
                {user ? 
                <>
                    <a href="/api/auth/logout">Logout</a>
                    {/* <img src={user.picture}/> */}
                </>
                :
                <a href="/api/auth/login">Login</a>
                }
            </nav>
            :
            <div>Menu</div>}
            
        </header>
    )
}