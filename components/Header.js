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
        <header className='header' onClick={resetClicks}>
            <Link href={'/'}>
                <a>
                    <h1>FunLearn</h1>
                </a>
            </Link>

            {showMenu ? 
            <nav className='header__navbar'>
                <span onClick={displayMenuTeacher}>Teachers</span>
                {menuTeacher ? <div className='menu teachers'>
                        <span>First step</span>
                        <span>Second step</span>
                        <span>Third step</span>
                        <span>Fourth step</span>
                </div> : <></>}
                <span onClick={displayMenuParents}>Parents</span>
                {menuParents ? <div className='menu parents'>
                        <span>First step</span>
                        <span>Second step</span>
                        <span>Third step</span>
                        <span>Fourth step</span>
                </div> : <></>}
                <div></div>
                <p className='language'>EN(US)</p>
                {user ? 
                <>
                    <a href="/api/auth/logout" className='login logout'>Logout</a>
                </>
                :
                <a href="/api/auth/login" className='login'>Login</a>
                }
            </nav>
            :
            <div>Menu</div>}
            
        </header>
    )
}