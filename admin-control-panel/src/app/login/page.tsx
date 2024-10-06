"use client";

import React, { useState } from "react";
import "../../styles/LoginPage.css";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div className="login-container">
            <div className="login-section">
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
            <div className="image-section">
                <img
                    src="/Assets/images/login.jpg"
                    alt="Project Related Image"
                />
            </div>
        </div>
    );
};

export default LoginPage;
