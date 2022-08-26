import { useState, useEffect } from 'react';
import Link from 'next/dist/client/link';
import { useUser } from '@auth0/nextjs-auth0'
import Image from 'next/image'
import { TiThMenu } from 'react-icons/Ti';
import { AiFillCaretDown } from 'react-icons/ai';

export default function Header() {

    const { user, error, isLoading } = useUser();

    const [width, setWidth] = useState(0)
    const [showMenu,setShowMenu] = useState(true)
    const [menuTeacher, setMenuTeacher] = useState(false)
    const [menuParents, setMenuParents] = useState(false)
    const [responsiveMenu, setResponsiveMenu] = useState(false)

    const menuOptions = 
    <>
        <span>Why FunLearn?</span>
        <span>Try out our activities</span>
        <span>Curricula</span>
    </>

    useEffect(()=>{
        if(menuParents) setMenuTeacher(false)    
        else if(menuTeacher) setMenuParents(false)
    },[menuParents,menuTeacher])

    
    useEffect(()=>{
        setWidth(window.innerWidth);
    },[])
      
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

    function displayResponsiveMenu() {
        setResponsiveMenu(prev => !prev)
    }

    function hideMenu() {
        setMenuTeacher(false)
        setMenuParents(false)
    }

    return (
        <header className='header' onClick={resetClicks}>
            <Link href={'/'}>
                <a>
                    <h1>
                        <span style={{color:'#FF0000'}}>F</span>
                        <span style={{color:'#FF00F6'}}>u</span>
                        <span style={{color:'#00AA00'}}>n</span>
                        <span style={{color:'#F99D07'}}>L</span>
                        <span style={{color:'#FF0066'}}>e</span>
                        <span style={{color:'#0000FF'}}>a</span>
                        <span style={{color:'#37B6F6'}}>r</span>
                        <span style={{color:'#882FF6'}}>n</span>
                    </h1>
                </a>
            </Link>

            {showMenu ? 
            <nav className='header__navbar'>
                <span 
                    onMouseOver={displayMenuTeacher} 
                    onClick={displayMenuTeacher} 
                >
                    Teachers <AiFillCaretDown/>
                </span>
                {menuTeacher ? <div className='menu teachers' onMouseLeave={hideMenu}>
                        {menuOptions}
                        <span>Teaching resources</span>
                </div> : <></>}
                <span onMouseOver={displayMenuParents} onClick={displayMenuParents}>Parents <AiFillCaretDown/></span>
                {menuParents ? <div className='menu parents' onMouseLeave={hideMenu}>
                        {menuOptions}
                        <span>First steps in FunLearn</span>
                </div> : <></>}
                <div></div>
                <p className='language'>EN(US)</p>
                {user ? 
                <>
                <Link href="/api/auth/logout" className='login logout'>Logout</Link>
                </>
                :
                <Link href="/api/auth/login" className='login'>Login</Link>
                }
            </nav>
            :
            <div>
                <TiThMenu className='header__menu' onClick={displayResponsiveMenu}/>
            </div>}

            {responsiveMenu? 
            <div className='header__responsive-navbar'>
                <span onClick={displayMenuTeacher}>Teachers</span>
                {menuTeacher ? <div className='menu teachers'>
                        <span>Why FunLearn?</span>
                        <span>Try out our activities</span>
                        <span>Curricula</span>
                        <span>Teaching resources</span>
                </div> : <></>}
                <span onClick={displayMenuParents}>Parents</span>
                {menuParents ? <div className='menu parents'>
                        <span>Why FunLearn?</span>
                        <span>Try out our activities</span>
                        <span>Curricula</span>
                        <span>First steps in FunLearn</span>
                </div> : <></>}
                <div></div>
                <p className='language'>EN(US)</p>
                {user ? 
                <>
                    <Link href="/api/auth/logout" className='login logout'>Logout</Link>
                </>
                :
                <Link href="/api/auth/login" className='login'>Login</Link>
                }
            </div>
            : <></>}
            
        </header>
    )
}