import Header from "../components/Header";
import { useState } from "react";

const Signup = () => {
    const [isSignup, setIsSignup] = useState(false);
    const handleSignup = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const mail = event.target.mail.value;
        fetch("http://localhost:3005/api/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                mail: mail,
            }),
        })
        .then((dataJs) => (setIsSignup(true)))
    };

    return (
        <div>
            <Header />
            <div className="container-register">
                <form onSubmit={handleSignup}>
                {!isSignup ?
                    <div className="form-register">
                        <h4>SIGNUP</h4>
                        <label>Nom d'utilisateur
                            <input type="text" id="username"  name="username" />
                        </label>
                        <label>Mot de passe
                            <input type="text" id="password" name="password" />
                        </label>
                        <label>Mail
                            <input type="text" id="mail" name="mail" />
                        </label>
                    </div>
                    :
                    <p>Vous êtes bien enregistré</p>
                    }           
                    <button type="submit">S'enregistrer</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;