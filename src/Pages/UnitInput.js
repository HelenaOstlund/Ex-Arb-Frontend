import React from "react";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";


function UnitInput(props) {
    return (
        <div className="group">
            <input type="text" value={props.weight} onChange={ev => props.onWeightChange(ev.target.value)} />
            <select value={props.unit} onChange={ev => props.onUnitChange(ev.target.value)}>
                {props.units.map((unit => (
                    <option value={unit}>{unit}</option>
                )))}
            </select>
        </div>
    );
}

UnitInput.PropTypes = {
    weight: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    units: PropTypes.array,
    onWeightChange: PropTypes.func,
    onUnitChange: PropTypes.func,
}

export default UnitInput;