import { useState } from "react";
import "../Style.css";

function TemperatureConverter() {
    const [inputValue, setInputValue] = useState(0);
    const [convertedValue, setConvertedValue] = useState(0);
    const [conversionMode, setConversionMode] = useState("fahrenheitToCelsius");

    function handleInputChange(event) {
        const value = parseFloat(event.target.value);
        setInputValue(value);
    }

    function convertFahrenheitToCelsius(fahrenheit) {
        const celsius = ((fahrenheit - 32) * 5) / 9;
        return celsius;
    }

    function convertCelsiusToFahrenheit(celsius) {
        const fahrenheit = (celsius * 9) / 5 + 32;
        return fahrenheit;
    }

    function handleConversion() {
        if (conversionMode === "fahrenheitToCelsius") {
            const convertedValue = convertFahrenheitToCelsius(inputValue);
            setConvertedValue(convertedValue);
        } else if (conversionMode === "celsiusToFahrenheit") {
            const convertedValue = convertCelsiusToFahrenheit(inputValue);
            setConvertedValue(convertedValue);
        }
    }

    function handleModeChange(event) {
        const mode = event.target.value;
        setConversionMode(mode);
    }

    return (
        <div>
            <h1>Oven Temperature Converter</h1>
            <div className="unit-converter">
                <div>
                    <label>
                        Temperature:
                        <input
                            type="number"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Convert from:
                        <select value={conversionMode} onChange={handleModeChange}>
                            <option value="fahrenheitToCelsius">Fahrenheit to Celsius</option>
                            <option value="celsiusToFahrenheit">Celsius to Fahrenheit</option>
                        </select>
                    </label>
                </div>
                <div>
                    <button onClick={handleConversion}>Convert</button>
                </div>
                <div>
                    <p>
                        Converted Temperature: {convertedValue}{" "}
                        {conversionMode === "fahrenheitToCelsius" ? "°C" : "°F"}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TemperatureConverter;
