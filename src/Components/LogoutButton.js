import React from "react";
import { Link } from "react-router-dom";

export default function LogoutButton() {
    const handleLogout = () => {
        localStorage.removeItem("token");
    };

    return (
        <Link to="/" onClick={handleLogout}>
            <button>Logout</button>
        </Link>
    );
}
