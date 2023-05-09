import React, { useState } from "react";
import axios from "axios";
import "../Style.css";

function DeleteUnit() {
    const [unitId, setUnitId] = useState("");
    const [error, setError] = useState("");

    const handleDelete = (e) => {
        e.preventDefault();
        if (!unitId) {
            setError("Please enter a unit ID");
            return;
        }

        const token = localStorage.getItem("token");
        axios
            .delete(`http://localhost:8080/deleteUnit/${unitId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(() => {
                window.alert("Unit deleted successfully!");
                setUnitId("");
            })
            .catch((error) => {
                console.log(error);
                window.alert("Failed to delete unit!");
            });
    };

    return (
        <div>
            <h3>Delete Unit</h3>
            <form onSubmit={handleDelete}>
                <div>
                    <div>
                        <label htmlFor="unitId">Unit ID:</label>
                    </div>
                    <input
                        id="unitId"
                        type="text"
                        placeholder="Unit ID"
                        value={unitId}
                        onChange={(e) => setUnitId(e.target.value)}
                    />
                </div>
                {error && <div>{error}</div>}
                <div>
                    <button type="submit">Delete Unit</button>
                </div>
            </form>
        </div>
    );
}

export default DeleteUnit;
