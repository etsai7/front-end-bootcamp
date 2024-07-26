import React, { useState } from 'react';
import './CalculatorDisplay.css';



function CalculatorDisplay({ lValue, rValue, operator }) {

	let [op, setOperator] = useState('operator');
	let [result, setResult] = useState(0);

	switch (operator) {
		case '+':
			result = lValue + rValue;
			break;
		case '-':
			result = lValue - rValue;
			break;
		case '*':
			result = lValue * rValue;
			break;
		case '/':
			result = lValue / rValue;
			break;
		default:
			result = 'unknown';
	}

	return (
		<div className="calculator-display">
			
			<div className="lValue">{lValue}</div>
			<div className="operator">{setOperator(operator)}</div>
			<div className="rValue">{rValue}</div>
			<div>=</div>
			<div className="result">{setResult(result)}</div>
		</div>
	);
}



function handleOperation(event) {
	const selectedFruit = event.target.value;
	console.log(`You selected ${selectedFruit}`);
	// Add other code here to handle the selected fruit
  }

export default CalculatorDisplay;
