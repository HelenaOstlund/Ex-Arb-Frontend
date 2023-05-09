import React, { useState } from "react";
import axios from "axios";
import "../Style.css";

function CreateUnit() {
    const [unitName, setUnitName] = useState("");
    const [unitType, setUnitType] = useState("");
    const [conversionRate, setConversionRate] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!unitName || !unitType || !conversionRate) {
            setError("All fields are required!");
        } else if (isNaN(conversionRate)) {
            setError("Conversion rate must be a number!");
        } else {
            const data = { unitName, unitType, conversionRate };
            const token = localStorage.getItem("token");
            axios
                .post("http://localhost:8080/createUnit", data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    window.alert("Unit created successfully!");
                    setUnitName("");
                    setUnitType("");
                    setConversionRate("");
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div>
            <h3>Create a new Unit</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="unitName">Unit Name</label>
                    </div>
                    <input
                        id="unitName"
                        type="text"
                        placeholder="Unit Name"
                        value={unitName}
                        onChange={(e) => setUnitName(e.target.value)}
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor="unitType">Unit Type</label>
                    </div>
                    <input
                        id="unitType"
                        type="text"
                        placeholder="Unit Type"
                        value={unitType}
                        onChange={(e) => setUnitType(e.target.value)}
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor="conversionRate">Conversion Rate</label>
                    </div>
                    <input
                        id="conversionRate"
                        type="text"
                        placeholder="Conversion Rate"
                        value={conversionRate}
                        onChange={(e) => setConversionRate(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Create Unit</button>
                </div>
            </form>
            {error && <div>{error}</div>}
        </div>
    );
}

export default CreateUnit;
