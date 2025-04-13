import { useEffect, useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import {toast} from "react-toastify"

import "../styles/Login.css"


function Login({ setIsLoggedIn }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const ProceedLogin = (e) => {
        e.preventDefault()
        if(validate()) {
            fetch("http://localhost:3000/users/" + username)
            .then((res)=>{
                return res.json()
            }).then((resp) => {
                if(Object.keys(resp).length === 0) {
                    toast.warning("Please enter valid usernname")
                } else {
                    if(resp.password === password) {
                        toast.success("Success")
                        localStorage.setItem('isLoggedIn', 'true');
                        localStorage.setItem('username', username);
                        setIsLoggedIn(true)
                        navigate("/")
                    } else {
                        toast.warning("Enter valid password")
                    }
                }
            })
        }
    }

    const validate = () => {
        let result = true
        if(username =="" || username === null) {
            result = false
            toast.warning("Enter Username")
        }
        if(password =="" || password === null) {
            result = false
            toast.warning("Plase Enter Password")
        }
        return result
    }

    return (
        <>
        
        <div className="login">

            <h2>Log In</h2>

            <form onSubmit={ProceedLogin}>
                <div className="form-element">
                 <label >Username</label>
                 <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                </div>

                <div className="form-element">
                    <label >Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>

        </>
    )
}

export default Login