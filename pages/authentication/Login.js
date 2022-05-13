import { useState } from "react"
import Header from "../../components/header"
import Link from "next/link"
import { getUser } from "./dataLogin"

export default function Login() {
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
            <h2>Log In</h2>
            <form className="form">
                <label>Email:</label>
                <input type='email' required onChange={inputEmail}/>
                <label>Password:</label>
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