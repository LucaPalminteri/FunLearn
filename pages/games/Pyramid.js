import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Clock from "../../components/Clock";
import { secs, mins } from "../../components/Clock";
import Head from 'next/head'
import Link from 'next/dist/client/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Pyramid(props) {

    const [test, setTest] = useState([])
    const [win, setWin ] = useState(false);
    const [finish,setFinish] = useState(false);
    const [record,setRecord] = useState([]);
    const [time,setTime] = useState();
    let aux = 0,tries = 0;

    useEffect(()=> {
        setRecord([mins,secs])
    },[secs])

    ordenatedBase(test)

    useEffect(()=> {
        setTest(createBase(props.value || 8))
        setTime(<Clock second={0} minute={0}/>)
    },[])

    function changeInput(e,i,j) {
        e.target.value == test[i][j] ? 
        aux++: undefined
    }

    function createBase(n) {
        const base = []
        for (let i = n; i > 0; i--) {
            const arr = []
                for (let i = 0; i < n; i++) {
                    arr.push(Math.ceil(Math.random()*9))
                }
            base.push(arr)
            n--;
        }
        return(base);
    }

    function handleKeyPress(target) {
        if(target.charCode === 13) {
            verify(target)
        }
    }

    function ordenatedBase(arr) {
        for (let i = 0; i < arr.length; i++) {
           for (let j = 0; j < arr[i].length; j++) {
               if(i > 0) {
                    arr[i][j] = arr[i-1][j] + arr[i-1][j+1]
               }
               else if (i === 0) {
                    arr[i][j] = arr[i][j]
               }
           }
        }

        return(arr);
    }

    function newPyramid(arr) {
        let pyramid = []

        for (let i = 0; i < arr.length; i++) {
            let line = []
            for (let j = 0; j < arr[i].length; j++) {
                let n = Math.random()
                if (n > (props.value === 4 ? 0.4 : 0.6)) {
                    aux++
                    line.push(<input 
                        className="input-result" 
                        onChange={changeInput} 
                        key={nanoid()} 
                        type='number' 
                        value={arr[i][j]} 
                        disabled/>)
                }
                else {
                    tries++
                    line.push(<input 
                        onChange={(e)=>changeInput(e,i,j)} 
                        key={nanoid()} 
                        type='number'/>)
                }
            }
            pyramid.push(<div key={nanoid()}>{line}</div>)
        }

        
        return(
            <div className="pyramid__container">
                {pyramid.reverse()}
            </div>
        )
    }

    function toggle() {
        console.log("should update");
        setTest(createBase(props.value || 8))
    }

    function verify() {
        setFinish(true)
        if(aux >= tries) setWin(true);
        else console.log("lose");
        setTimeout(()=>{
            setTest(createBase(props.value || 8))
            setWin(false)
            setFinish(false)
        },2000)
    }

    return (
        <div onKeyPress={handleKeyPress} className='pyramid game'>
            <Head>
                <title>Numerical Pyramid</title>
            </Head>
            <Header />
            <h2>Numerical Pyramid</h2>
            <main>
                {finish ? 
                    win ? 
                    <div className="message">
                        <div>Win</div>
                        <div>Time: {mins}:{secs}</div>
                    </div> : 
                    <div className="message">
                        <div>Lose</div>
                        <div>Time: {mins}:{secs}</div>
                    </div> :
                <></> }
                <div className="pyramid-container">
                    {newPyramid(test)}
                </div>
                <div className="clock-container"> 
                    {finish ? 
                    <>
                        <label>Time:</label>
                        <div className="clock">00:00</div>
                    </>
                     : 
                    <>
                        <label>Time: {time}</label>
                        
                    </>
                    }
                    <label>Record: {record[0]}:{record[1]}</label>
                </div>
            </main>
            <div className="btn-container">
                <button onClick={toggle}>New Game</button>
                <button onClick={verify}>Finish</button>
            </div>
            <Link href='/'>
                <a><button>Back home</button></a>
            </Link>
            <Footer />
        </div>
    )
}