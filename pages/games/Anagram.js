import { useState, useEffect } from "react";
import Head from 'next/head'
import Link from 'next/dist/client/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const words =[
    "blue","red","orange","pink","white","black","purple",
    "brown","grey","yellow","green","cyan","violet"
]

export default function Anagram() {

    const wordsLength = words.length;
    const [input,setInput] = useState('')
    const [output,setOutput] = useState()
    const [anagram,setAnagram] = useState(words[Math.floor(Math.random()*wordsLength)])
    const [isDone,setIsDone] = useState()
    const [didWin,setDidWin] = useState('')
    const [count,setCount] = useState(0)
    const [isDisabled,setIsDisabled] = useState(false)
    const [winCount,setWinCount] = useState(0)

    useEffect(()=>{
        setIsDone(false)
        let spellAnagram = []
        for(let i=0;i<anagram.length;i++){
            spellAnagram.push(anagram[i]) 
        }
    
        let output = spellAnagram.sort().toString().replaceAll(',',' ').toUpperCase();
        setOutput(output)
            
    },[anagram])

    function toggle(e) {
        setIsDisabled(true)
        setCount(prev=>prev+1)
        setIsDone(prev => !prev)
        reset()
        if(input.toLocaleLowerCase() === anagram.toLocaleLowerCase()) {
            setDidWin('win')
            setWinCount(prev => prev+1)
        }
        else {
            setDidWin('lose')
        }
    }

    function inputChange(e) {
        setInput(e.target.value)
    }

    function handleKeyPress(target) {
        if(target.charCode === 13) {
            toggle()
        }
    }

    function reset(){
        setTimeout(()=>{
            setIsDisabled(false)
            setDidWin('')
            setInput('')
            setOutput(anagram)
            setAnagram(words[Math.floor(Math.random()*wordsLength)])
        },2000)
    }

    function finalAnagram() {
        let spellAnagram = []
        for(let i=0;i<anagram.length;i++){
            spellAnagram.push(anagram[i]) 
        }
        return(spellAnagram.toString().replaceAll(',',' ').toUpperCase());
    }

  return (
    <div className="anagram game">
        <Head>
            <title>Anagram</title>
        </Head>
        <Header />
        <h2>Anagram</h2>
        <div className="anagram__main">

        <div>
            <span>Points: {winCount}/{count} </span>
            <span>- {winCount === 0 ? '0' : ((winCount/count) + '').slice(0,4)}%</span>
        </div>
        <input onChange={inputChange} autoFocus value={input} onKeyPress={handleKeyPress} type='text'/>
        <button onClick={toggle} disabled={isDisabled}>Review</button>
        <h4 className="anagram">{isDone ? finalAnagram() : output}</h4>
        <h3 className="message">{didWin === 'win' ? 'Win': didWin === 'lose' ? "Lose" : didWin}</h3>
        </div>
        <Link href='/'>
            <a>Back home</a>
        </Link>
        <Footer />
    </div>
  )
}