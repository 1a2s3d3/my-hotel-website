import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import FormContainer from "../components/FormContainer";

function Login() {
  const navigate = useNavigate();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!email || !password){
      alert("Fill all fields");
      return;
    }

    localStorage.setItem("isLoggedIn","true");
    navigate("/home");
  };

  return (
    <FormContainer title="Login" onSubmit={handleSubmit}>
      <FormInput
        label="Email"
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter email"
      />

      <FormInput
        label="Password"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Enter password"
      />
    </FormContainer>
  );
}

export default Login;