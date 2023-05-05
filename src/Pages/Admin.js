import React from "react";
import Register from '../Components/Register';
import LogoutButton from "../Components/LogoutButton";
import DeleteUser from "../Components/DeleteUser";
import CreateUnit from "../Components/CreateUnit";
export default function Admin() {

    return (
        <div>
            <h1>AdminPage</h1>
            <Register />
            <DeleteUser />
            <CreateUnit />
            <LogoutButton />
        </div>
    );
}