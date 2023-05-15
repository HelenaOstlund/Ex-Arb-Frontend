import React, { useState } from "react";

import axios from "axios";
import "../Style.css";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [setIsSignedIn] = useState(false);
    const [setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError("Username and password are required!");
        } else if (password.length < 4) {
            setError("Password is too short!");
        } else {
            const data = { username, password };
            axios
                .post("http://localhost:8080/api/v1/auth/register", data)
                .then((res) => {
                    localStorage.setItem("token", res.data.token);
                    setIsSignedIn(true);
                    window.alert("Registration successful!");
                    setUsername("");
                    setPassword("");
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div class="content">
            <div>
                <h3>Register a new Admin</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor="username">Name</label>
                        </div>
                        <input
                            id="username"
                            type="text"
                            placeholder="name"
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
                        <button type="submit">register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
