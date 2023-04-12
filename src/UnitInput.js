import PropTypes from "prop-types";
import './unitInput.css';

function UnitInput(props) {
    return (
        <div className="group">
            <input type="text" value={props.weight} onChange={ev => props.onWeightChange(ev.target.value)}></input>
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