import './App.css';
//import MyButton from './Components/MyButton';
import UnitInput from './UnitInput';
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [weight1, setWeight1] = useState(1);
  const [weight2, setWeight2] = useState(1);
  const [unit1, setUnit1] = useState('dl');
  const [unit2, setUnit2] = useState('dl');
  const [rates, setRates] = useState(1)

  useEffect(() => {
    axios.get() // Url ska in här
      .then(response => {
        setRates(response.data.rates);
      })
  }, []);

  useEffect(() => {
    if (!!rates) {
      handleWeight1Change(1);
    }
  }, [rates]);

  function format(number) {
    return number.toFixed(4);
  }

  function handleWeight1Change(weight1) {
    setWeight2(format(weight1 * rates[unit2] / rates[unit1]));
    setWeight1(weight1);
  }

  function handleUnit1Change(unit1) {
    setWeight2(format(weight1 * rates[unit2] / rates[unit1]));
    setUnit1(unit1);
  }

  function handleWeight2Change(weight2) {
    setWeight1(format(weight2 * rates[unit1] / rates[unit2]));
    setWeight2(weight2);
  }

  function handleUnit2Change(unit2) {
    setWeight1(format(weight2 * rates[unit1] / rates[unit2]));
    setUnit2(unit2);
  }

  return (
    <div>
      <h1>Unit Converter</h1>
      <UnitInput
        onWeightChange={handleWeight1Change}
        onUnitChange={handleUnit1Change}
        units={Object.keys(rates)}
        weight={weight1}
        unit={unit1} />
      <UnitInput
        onWeightChange={handleWeight2Change}
        onUnitChange={handleUnit2Change}
        units={Object.keys(rates)}
        weight={weight2}
        unit={unit2} />


    </div>
  );
}

export default App;

/*<MyButton onClick={() => alert("Hello World")}>
        console
      </MyButton>
      <MyButton onClick={() => console.log("Hello World")}>
        alert
      </MyButton> */