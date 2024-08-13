import { useState } from "react"; 
import "./App.css";

function App() {
  
  const [num1, setNum1] = useState(""); 
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  
  

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const calculateSum = () => {
    setResult(Number(num1) + Number(num2));
  }

  const calculateSubstract = () => {
    setResult(Number(num1) - Number(num2));
  }

  const calculateMultiply = () => {
    setResult(Number(num1) * Number(num2));
  }

  const calculateDivision = () => {
    setResult(Number(num1) / Number(num2));
  }

 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(null);
  }; 

  return (
    <div>
       <div>
            <input
                type="number"
                value={num1}
                onChange={handleNum1Change} // Handle input change for num1
                placeholder="Enter first number"
            />
            <input
                type="number"
                value={num2}
                onChange={handleNum2Change} // Handle input change for num2
                placeholder="Enter second number"
            />


            <button onClick={calculateSum}>Add</button>
            <button onClick={calculateSubstract}>Substract</button>
            <button onClick={calculateMultiply}>Multiply</button>
            <button onClick={calculateDivision}>Division</button>
            {result !== null && <p>Result: {result}</p>} {/* Display the result */}

            
        <button onClick={resetResult}>reset result</button> 
        </div>
    </div>
  )
} 
 
export default App;
