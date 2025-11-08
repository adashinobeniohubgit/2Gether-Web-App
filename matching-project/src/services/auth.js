import { auth, db } from "../services/config.js";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const ChecksnStore = async (email, password, firstname, lastname, username, gender, age, birthdate) =>{
    const allowedDomain = "@cvsu.edu.ph";
    if (email.endsWith(allowedDomain) && password.length >= 7) {
        signUp(email, password, firstname, lastname, username, gender, age, birthdate);
    }
    else{
        console.log("Invalid email domain or Password too short");
    }
};

const signUp = async (email, password, firstname, lastname, username, gender, age, birthdate) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("User Signed Up Successfully");
        const user = auth.currentUser.uid;

        await addDoc(collection(db, "users"), {
            uid: user,
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            gender: gender,
            age: age,
            birthdate: birthdate
        });
        window.location.href = "/login";
    }
    catch (error) {
        console.error("Error signing up: ", error);
    }
};

const login = async (email, password) => {
    try {
        const userDetails = await signInWithEmailAndPassword(auth, email, password);
        const user = userDetails.user;
        await alert("User Logged In Successfully", user.email);
}
    catch (error) {
        console.error("Error logging in: ", error);
    }
};

export { ChecksnStore, signUp, login };