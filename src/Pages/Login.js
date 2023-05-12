import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSignedIn, setIsSignedIn] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        const data = { username, password };
        axios
            .post("http://localhost:8080/api/v1/auth/authenticate", data)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("expiration", res.data.expiration);
                console.log(res.data.token)
                setIsSignedIn(true)
            })
            .catch((err) => {
                console.log(err);
                alert("wrong username or password");
            });
    };


    if (isSignedIn) {
        const expiration = localStorage.getItem("expiration");
        if (expiration && Date.now() > expiration) {
            localStorage.removeItem("token");
            localStorage.removeItem("expiration");
            alert("Your session has expired. Please login again.");
            return <Navigate to="/login" />;
        } else {
            return <Navigate to="/Admin" />;
        }
    }
    return (
        <div class="login-container">
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor="username"> Username</label>
                        </div>
                        <input
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>
                            <label htmlFor="password">Password</label>
                        </div>
                        <input
                            id="password"
                            type="password"
                            placeholder="******"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit">sign in</button>

                    </div>

                </form>
            </div>
        </div>
    );
}