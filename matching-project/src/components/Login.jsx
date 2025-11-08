import { useState } from "react";
import { login } from "../services/auth.js";

export function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
        await login(email, password);
    }
    return(
        <div className="login-form-container">
            <h1>LOG IN</h1>
            <input placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}/>

            <input placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={loginUser}>Login</button>
        </div>
    );
};