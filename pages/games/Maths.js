import React, {useState, useEffect} from "react";
import Head from 'next/head'
import Link from 'next/dist/client/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Add from './componentsGame/Add'
import Divide from './componentsGame/Divide'
import Multiply from './componentsGame/Multiply'
import Subtract from './componentsGame/Subtract'
import { MathContext } from "./componentsGame/MathContext";

export default function Maths() {

    const [games,setGames] = useState(0)
    const [wins,setWins] = useState(0)
    const [random,setRandom] = useState()

    useEffect(()=>
    {
        setRandom(Math.floor(Math.random()*4))
    },[])

    function addGames() {
        setGames(prev=>prev+1)
    }

    function addWin() {
        setWins(prev=>prev+1)
    }

    function result() {
        const x = wins/games*100;
        return x.toString().slice(0,2)
    }

    function changeOption() {
        setRandom(Math.floor(Math.random()*4))
    }

    return (
        <MathContext.Provider value={{addGames, addWin, changeOption}}>
            <Head>
                <title>Maths</title>
            </Head>
            <Header />
            <div className="maths game">
                <h2>Maths</h2>
                <div className="maths__container">

                <div className="points">
                    <span>Points: {wins}/{games} - </span>
                    <span>{games === 0 ? 0 : result()}%</span>
                </div>
                {random == 0 ? <Add/> : 
                random == 1 ? <Subtract/> :
                random == 2 ? <Multiply/> :
                random == 3 ? <Divide/> : random}
                </div>
            </div>
            <Link href='/'>
                <a>Back home</a>
            </Link>
            <Footer/>
        </MathContext.Provider>
    )
}