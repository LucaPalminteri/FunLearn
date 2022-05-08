import React, {useState, useEffect} from "react";
import Add from './Add'
import Subtract from './Subtract'
import Multiply from './Multiply'
import Divide from './Divide'

export default function Maths() {

    const [games,setGames] = useState(0)
    const [wins,setWins] = useState(0)
    const [random,setRandom] = useState(Math.floor(Math.random()*4))

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
        <div className="maths game">
            <h2>Maths</h2>
            <div className="points">
                <span>Points: {wins}/{games} - </span>
                <span>{games === 0 ? 0 : result()}%</span>
            </div>
        {random == 0 ? <Add/> : 
        random == 1 ? <Subtract/> :
        random == 2 ? <Multiply/> :
        random == 3 ? <Divide/> : random}
        </div>
    )
}