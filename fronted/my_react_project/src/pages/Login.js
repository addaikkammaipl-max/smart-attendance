import { useState } from "react";

function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const login=(e)=>{
    e.preventDefault();

    alert("Student Login Success");
  }

  return (

    <div className="container">

      <h2>Student Login</h2>

      <form onSubmit={login}>

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

        <button>Login</button>

      </form>

    </div>

  );
}

export default Login;