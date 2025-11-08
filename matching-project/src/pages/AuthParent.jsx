import { Login } from "../components/Login.jsx";
import { Signup } from "../components/SignUp.jsx";
import { useState } from "react";
import "../styles/AuthParent.css";

export function AuthParent() {
    const [isLogin, setIsLogin] = useState(true);
    return(
        <div>
            <div>
                {isLogin ? <Login /> : <Signup />}

                <p>
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                    onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "Sign Up" : "Log In"}

                    </button>
                </p>
            </div>
        </div>
    );
};