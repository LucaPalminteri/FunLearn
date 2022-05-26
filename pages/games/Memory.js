import { useState,useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/dist/client/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Memory() {

    const countObj = {
        count: 0,
        buttons: []
    }

    const [count,setCount] = useState({...countObj})

    const btns = [];
    for (let i = 0; i < 16; i++) {
        btns.push(<button onClick={getButton} id={i} key={i}></button>)
    }


    function getButton(e) {
        let id = e.target.id;
        setCount(prevObj => ({count:prevObj.count + 1,buttons: prevObj.buttons.concat(id)}))
        if(e.target.innerText == id) e.target.innerText = ''
        else e.target.innerText = id
        if(count.count == 2) {
            //console.log(`0: ${count.buttons[0]} - 1: ${count.buttons[1]}`)
            console.log(btns[count.buttons[0]]);
            setCount(countObj)
        }
    }
    

    return (
        <div className='memory game'>
            <Head>
                <title>Memory</title>
            </Head>
            <Header />
            <h2>Memory</h2>



            <div className='btn-container'>
                {btns}
            </div>

            

            <Link href='/'>
                <a>Back home</a>
            </Link>
            <Footer/>
        </div>
    )
}