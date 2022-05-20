import Link from "next/dist/client/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import { useState } from 'react'
import { nanoid } from 'nanoid'
import Data from '../../data/dataQuiz.json'

export default function Quiz() {

    const [data,setData] = useState(Data.questions)
    const [random,setRandom] = useState(Math.floor(Math.random()*Data.questions.length))
    const [answer,setAnswer] = useState('')
    const [isDisabled,setIsDisabled] = useState(false)
    const correctAnswer = data[random].correct_answer
    const incorrectAnswers = data[random].incorrect_answers


    function toggle(e) {
      if (e.target.innerText === correctAnswer) setAnswer('correct')
      else setAnswer('incorrect')
      setIsDisabled(true)
        reset()
    }

    function reset() {
        setTimeout(()=>{
            setRandom(Math.floor(Math.random()*50))
            setAnswer('')
            setIsDisabled(false)
        },2000)
    }

    const buttons = [
      incorrectAnswers.map(item => {
        return <button key={nanoid()} onClick={toggle} disabled={isDisabled}>{item}</button>}),
        <button key={nanoid()} onClick={toggle} disabled={isDisabled}>{correctAnswer}</button>
    ].sort(() => (Math.random() > .5) ? 1 : -1);
    
  return (
    <div className="quiz game">
      <Head>
        <title>Quiz</title>
      </Head>
      <Header />
      <h2>Quiz</h2>

      <div className="quiz__container">
        <h2>{data[random].category}</h2>
        <div className="">
          <h3>{data[random].question}</h3>
          <div className="questions">{buttons}</div>
        </div>
      </div>
      {answer === "correct" ? (
        <div className="message green">Correct</div>
      ) : answer === "incorrect" ? (
        <>
          <div className="message">
            Incorect - {correctAnswer}
          </div>
        </>
      ) : (
        <></>
      )}
      
      <Link href="/">
        <a>Back home</a>
      </Link>
      <Footer />
    </div>
  );
}
