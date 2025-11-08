import { useState } from "react";
import { ChecksnStore, signUp } from "../services/auth";


export function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [birthdate, setBirthdate] = useState("");

    const Submit = async () => {
        await ChecksnStore(email, password, firstname, lastname, username, gender, age, birthdate); 
    };

    return(
        <div className="signUp-form-container">
            <h1>SIGN UP</h1>
            <input placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}/>

            <input placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}/>

            <input placeholder="First Name"
            type="text"
            onChange={(e) => setFirstname(e.target.value)}/>

            <input placeholder="Last Name"
            type="text"
            onChange={(e) => setLastname(e.target.value)}/>

            <input placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}/>


            <div id="genderID">
                <label>Male</label>
                <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setGender(e.target.value)}/>

                <label>Female</label>
                <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}/>
            </div>

            <input placeholder="Age"
            type="number"
            min={1}
            max={99}
            onChange={(e) => setAge(e.target.value)}/>

            <input
            type="date"
            onChange={(e) => setBirthdate(e.target.value)}/>

            <button onClick={Submit}>Sign Up</button>
            
        </div>
        );
    }