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

    function toggle() {
        setAnswer('correct')
        reset()
    }

    function noToggle() {
        setAnswer('incorrect')
        reset()
    }

    function reset() {
        setTimeout(()=>{
            setRandom(Math.floor(Math.random()*50))
            setAnswer('')
        },2000)
    }

    const buttons = [
            <button key={nanoid()} onClick={noToggle}>{data[random].incorrect_answers[1]}</button>,
            <button key={nanoid()} onClick={noToggle}>{data[random].incorrect_answers[0]}</button>,
            <button key={nanoid()} onClick={toggle}>{data[random].correct_answer}</button>,
            <button key={nanoid()} onClick={noToggle}>{data[random].incorrect_answers[2]}</button>
    ].sort(() => (Math.random() > .5) ? 1 : -1);
  return (
    <div className="quiz game">
      <Head>
        <title>Quiz</title>
      </Head>
      <Header />
      <h2>Quiz</h2>

      <div className="card">
        <h2>{data[random].category}</h2>
        <div className="card--badge">
          <h3>{data[random].question}</h3>
          <div className="card--btns">{buttons}</div>
        </div>
      </div>
      {answer === "correct" ? (
        <div className="message green">Correct</div>
      ) : answer === "incorrect" ? (
        <>
          <div className="message">
            Incorect - {data[random].correct_answer}
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
