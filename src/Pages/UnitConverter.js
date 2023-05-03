import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UnitConverter() {
    const [weight1, setWeight1] = useState(1);
    const [weight2, setWeight2] = useState(1);
    const [unit1, setUnit1] = useState('l');
    const [unit2, setUnit2] = useState('l');
    const [units, setUnits] = useState(1)

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/auth/getAllUnits')
            .then(response => {
                //setUnits(response.data.units)
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);



    useEffect(() => {
        if (!!units) {
            handleWeight1Change(1);
        }
    }, [units]);

    function format(number) {
        return number.toFixed(4);
    }

    function handleWeight1Change(weight1) {
        setWeight2(format(weight1 * units[unit2] / units[unit1]));
        setWeight1(weight1);
    }

    function handleUnit1Change(unit1) {
        setWeight2(format(weight1 * units[unit2] / units[unit1]));
        setUnit1(unit1);
    }

    function handleWeight2Change(weight2) {
        setWeight1(format(weight2 * units[unit1] / units[unit2]));
        setWeight2(weight2);
    }

    function handleUnit2Change(unit2) {
        setWeight1(format(weight2 * units[unit1] / units[unit2]));
        setUnit2(unit2);
    }

    return (
        <div>
            <h1>Unit Converter</h1>
            <UnitInput
                onWeightChange={handleWeight1Change}
                onUnitChange={handleUnit1Change}
                units={Object.keys(units)}
                weight={weight1}
                unit={unit1} />
            <UnitInput
                onWeightChange={handleWeight2Change}
                onUnitChange={handleUnit2Change}
                units={Object.keys(units)}
                weight={weight2}
                unit={unit2} />


        </div>

    );
}
export default UnitConverter;