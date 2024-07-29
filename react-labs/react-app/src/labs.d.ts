// This is a types definition file
export type MathOperators = '+' | '-' | '*' | '/';

export interface CalculatorDisplayProps {
    lValue:number; 
    rValue:number; 
    operator:MathOperators
}