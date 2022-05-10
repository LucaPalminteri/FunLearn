import { useState, useEffect } from 'react';
import Link from 'next/dist/client/link';
import { Auth0Provider } from "@auth0/auth0-react";

export default function Header() {

    const [width, setWidth] = useState(0)
    const [showMenu,setShowMenu] = useState(true)

    useEffect(()=>{
        setWidth(window.innerWidth);
    },[])
    

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
                <button className='login-btn'>Log In</button>
                <button>Sing Up</button>
            </nav>
            :
            <div>Menu</div>}
            
        </header>
    )
}