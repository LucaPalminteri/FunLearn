import { useState } from "react"
import Link from "next/link"
//const mysql = require('mysql')

export default function Singup() {
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()

    function inputEmail(e) {
        console.log(e.target.value);
    }

    function inputPassword(e) {
        console.log(e.target.value);
    }

    return (
        <div className="login">
            <h2>Sing Up</h2>
            <form className="form">
                <label>Name:</label>
                <input type='text' required />
                <label>Email:</label>
                <input type='email' required onChange={inputEmail}/>
                <label>Password:</label>
                <input type='password' required onChange={inputPassword}/>
                <label>Repeat password:</label>
                <input type='password' required onChange={inputPassword}/>
                <button type="submit">Log In</button>
            </form>
            <Link href='/'>
                <a>
                    Go Home
                </a>
            </Link>
        </div>
    )
}