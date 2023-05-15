import { useState, useEffect } from "react";
import axios from "axios";
import "../Style.css";
import TemperatureConverter from "../Components/TemperatureConverter";

function UnitConverter() {
    const [units, setUnits] = useState([]);
    const [sourceUnit, setSourceUnit] = useState(null);
    const [destinationUnit, setDestinationUnit] = useState(null);
    const [inputValue, setInputValue] = useState(0);
    const [convertedValue, setConvertedValue] = useState(0);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/v1/auth/getAllUnits")
            .then((response) => {
                setUnits(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function handleSourceUnitChange(event) {
        const unitId = parseInt(event.target.value);
        const unit = units.find((u) => u.id === unitId);
        setSourceUnit(unit);
    }

    function handleDestinationUnitChange(event) {
        const unitId = parseInt(event.target.value);
        const unit = units.find((u) => u.id === unitId);
        setDestinationUnit(unit);
    }

    function handleInputChange(event) {
        const value = parseFloat(event.target.value);
        setInputValue(value);
    }

    useEffect(() => {
        if (sourceUnit && destinationUnit) {
            const convertedValue = convertUnits(sourceUnit, destinationUnit, inputValue);
            setConvertedValue(convertedValue);
        }
    }, [sourceUnit, destinationUnit, inputValue]);

    return (
        <div>
            <div className="nav-link">
                <a href="/login" className="link">Admin Login</a>
            </div>

            <h1>Baking Unit Converter</h1>
            <div className="unit-converter">
                <div>
                    <label>
                        From:
                        <select value={sourceUnit?.id || ""} onChange={handleSourceUnitChange}>
                            <option value="">-- Select Source Unit --</option>
                            {units.map((unit) => (
                                <option key={unit.id} value={unit.id}>
                                    {unit.unitName} ({unit.unitType})
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        To:
                        <select value={destinationUnit?.id || ""} onChange={handleDestinationUnitChange}>
                            <option value="">-- Select Destination Unit --</option>
                            {units.map((unit) => (
                                <option key={unit.id} value={unit.id}>
                                    {unit.unitName} ({unit.unitType})
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Input Value:
                        <input type="number" value={inputValue} onChange={handleInputChange} />
                    </label>
                </div>
                <div>
                    <p>Converted Value: {convertedValue}</p>
                </div>
            </div>
            <div>

                <div>
                    <TemperatureConverter />
                </div>
            </div>
        </div>
    );
}

function convertUnits(sourceUnit, destinationUnit, value) {
    const sourceRate = sourceUnit.conversionRate;
    const destinationRate = destinationUnit.conversionRate;

    // Calculate the conversion factor
    const conversionFactor = sourceRate / destinationRate;

    // Convert the value using the conversion factor
    const convertedValue = value * conversionFactor;

    return convertedValue;
}

export default UnitConverter;
