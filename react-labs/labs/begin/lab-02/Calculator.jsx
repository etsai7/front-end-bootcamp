import React from 'react';
import CalculatorDisplay from './CalculatorDisplay';

/*
Select an operator from a drop-down. Pass the selected operator 
into CalculatorDisplay.

Use the useState hook to initialize the operator

Write an event handler, `handleSwitch` which takes an event as an argument
and calls the setter you configured in your useState call

Add a <select> list above CalculatorDisplay. The options should be
- "Choose" / value is the empty string
- Addition
- Subtraction
- Multiplication
- Division

Don't forget to update the `onChange` and `value` attributes of the select list
to make it a controlled component (controlled by `handleSwitch` above)

Pass the value you used for the operator in your useState hook into 
CalculatorDisplay as the `operator` property
*/

function Calculator() {
	let [op, setOperator] = useState('operator');
	return (
		<div>
			<label for="select-op">Select your favorite operator:</label>
			<select id="select-op" name="op" onChange={(e) => { setOperator(e.currentTarget.value);}}>
				<option value="+">+</option>
				<option value="-">-</option>
				<option value="*">*</option>
				<option value="/">/</option>
			</select>
			<CalculatorDisplay
				lValue={5}
				rValue={10}
				operator={operator}
			/>
		</div>
	);
}

export default Calculator;
