import { useNavigate } from "react-router";
import Header from "../components/Header";

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        fetch("http://localhost:3005/api/users/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
        .then((dataJson) => (dataJson.json()))
        .then((dataJs) => {(localStorage.setItem("token", dataJs.token))
        navigate("/admin")})
    };


    return (
        <div>
            <Header />
            <div className="container-register">
                <form onSubmit={handleLogin}>
                    <div className="form-register"> 
                        <h4>LOGIN</h4>
                        <label>Nom d'utilisateur
                            <input type="text" id="username"  name="username" />
                        </label>
                        <label>Mot de passe
                            <input type="text" id="password" name="password" />
                        </label>
                    </div>
                    <button type="submit">Se Connecter</button>
                </form>

            </div>
        </div>
    );
};

export default Login;