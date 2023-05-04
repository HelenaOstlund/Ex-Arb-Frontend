import { useState, useEffect } from "react";
import axios from "axios";

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
            <h1>Unit Converter</h1>
            <div>
                <label>
                    Source Unit:
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
                    Destination Unit:
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
    );
}

function convertUnits(sourceUnit, destinationUnit, value) {
    const sourceRate = sourceUnit.conversionRate;
    const destinationRate = destinationUnit.conversionRate;

    // Calculate the conversion factor
    const conversionFactor = destinationRate / sourceRate;

    // Convert the value using the conversion factor
    const convertedValue = value * conversionFactor;

    return convertedValue;
}

export default UnitConverter;
