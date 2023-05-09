import React, { useState } from "react";
import axios from "axios";
import "../Style.css";

function DeleteUser() {
    const [userId, setUserId] = useState("");
    const [error, setError] = useState("");

    const handleDelete = (e) => {
        e.preventDefault();
        if (!userId) {
            setError("Please enter a user ID");
            return;
        }

        const token = localStorage.getItem("token");
        axios
            .delete(`http://localhost:8080/api/v1/users/delete_user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(() => {
                window.alert("User deleted successfully!");
                setUserId("");
            })
            .catch((error) => {
                console.log(error);
                window.alert("Failed to delete user!");
            });
    };

    return (
        <div>
            <h3>Delete User</h3>
            <form onSubmit={handleDelete}>
                <div>
                    <div>
                        <label htmlFor="userId">User ID:</label>
                    </div>
                    <input
                        id="userId"
                        type="text"
                        placeholder="User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
                {error && <div>{error}</div>}
                <div>
                    <button type="submit">Delete User</button>
                </div>
            </form>
        </div>
    );
}

export default DeleteUser;
