import React from "react";
import Register from '../Components/Register';
import DeleteUser from "../Components/DeleteUser";
import CreateUnit from "../Components/CreateUnit";
import DeleteUnit from "../Components/DeleteUnit";
import LogoutButton from "../Components/LogoutButton";
import "../Style.css";

export default function Admin() {

    return (
        <div>
            <h1>AdminPage</h1>

            <div className="admin-container">

                <Register />
                <DeleteUser />
                <CreateUnit />
                <DeleteUnit />
                <LogoutButton />
            </div>
        </div>
    );
}