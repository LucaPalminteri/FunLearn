import { useState, useEffect } from 'react';
import Link from 'next/dist/client/link';
import { useUser } from '@auth0/nextjs-auth0'
import Image from 'next/image'


export default function Header() {

    const { user, error, isLoading } = useUser();

    const [width, setWidth] = useState(0)
    const [showMenu,setShowMenu] = useState(true)
    const [menuTeacher, setMenuTeacher] = useState(false)
    const [menuParents, setMenuParents] = useState(false)

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

    function displayMenuTeacher() {
        setMenuTeacher(prev => !prev)
    }

    function displayMenuParents() {
        setMenuParents(prev => !prev)
    }

    function resetClicks() {
        if(menuTeacher || menuParents) {
            setMenuTeacher(false)
            setMenuParents(false)
        }
    }

    return (
        <header className='header'>
            <Link href={'/'}>
                <a>
                    <h1>FunLearn</h1>
                </a>
            </Link>

            {showMenu ? 
            <nav className='header__navbar'>
                <span onClick={displayMenuTeacher}>Teachers</span>
                {menuTeacher ? <div className='teachers'>
                    <ul>
                        <li>First step</li>
                        <li>Second step</li>
                        <li>Third step</li>
                        <li>Fourth step</li>
                    </ul>
                </div> : <></>}
                <span onClick={displayMenuParents}>Parents</span>
                {menuParents ? <div className='parents'>
                    <ul>
                        <li>First step</li>
                        <li>Second step</li>
                        <li>Third step</li>
                        <li>Fourth step</li>
                    </ul>
                </div> : <></>}
                <div></div>
                <p className='language'>EN(US)</p>
                {user ? 
                <>
                    <a href="/api/auth/logout">Logout</a>
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