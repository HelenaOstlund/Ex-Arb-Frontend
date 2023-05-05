import React from "react";
import Register from '../Components/Register';
import LogoutButton from "../Components/LogoutButton";

export default function Admin() {

    return (
        <div>
            <h1>AdminPage</h1>
            <Register />
            <LogoutButton />
        </div>
    );
}