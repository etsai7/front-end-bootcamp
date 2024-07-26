
// Replacing default prop with map thing - {x,y}. Called something, destructuring?
interface AdderWithProps {
    x: number;
    y: number;
}
export default function AdderWithProp({x,y}: AdderWithProps){
    return (
        <p>Adder with Interface Prop: The sum of {x} and {y} is {x + y}</p>
    )
}