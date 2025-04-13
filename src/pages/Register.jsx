import "../styles/Registration.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function Validation() {

    let proceed = true
    let errorMessage = "Please enter the information"

    if(firstName === null || firstName === "") {
      proceed = false
      errorMessage += " Enter First Name"
    }
    if(lastName === null || lastName === "") {
      proceed = false
      errorMessage += " Enter Last Name"
    }
    if(id === null || id === "") {
      proceed = false
      errorMessage += " Enter Username"
    }
    if(email === null || email === "") {
      proceed = false
      errorMessage += " Enter Email"
    }
    if(password === null || password === "") {
      proceed = false
      errorMessage += " Enter Password"
    }
    
    return proceed
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      let reg_info = {firstName, lastName, id, email, password}
      if(Validation()) {
        
        fetch("http://localhost:3000/users", {
          method:"POST",
          headers:{"content-type":"application/json"},
          body: JSON.stringify(reg_info)
        }).then((res) => {
          toast.success("Registered successfully")
          navigate("/login")
        }).catch((err) => {
          toast.error("Failed: " + err.message)
        })
      }
  }

  return (
    <div className="container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <label htmlFor="first_name">First Name</label>
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Enter First Name" />
        </div>

        <div className="form-element">
          <label htmlFor="last_name">Last Name</label>
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter Last Name" />
        </div>

        <div className="form-element">
          <label htmlFor="username">Username*</label>
          <input value={id} onChange={(e) => setId(e.target.value)} type="text" placeholder="Enter a username" />
        </div>

        <div className="form-element">
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
        </div>

        <div className="form-element">
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" minlength="8" />
        </div>
        
        <p>* - Remember <span>Username</span> because you will use it for <span>Log In</span></p>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;
