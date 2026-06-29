import { useState } from "react";

function Register(){

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const register=(e)=>{
e.preventDefault();

alert("Registration Successful");

}

return(

<div className="container">

<h2>Student Register</h2>

<form onSubmit={register}>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button>Register</button>

</form>

</div>

)

}

export default Register;