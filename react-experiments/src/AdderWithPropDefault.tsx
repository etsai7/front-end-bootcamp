
// Replacing default prop with map thing - {x,y}. Called something, destructuring
interface AdderWithProps {
    x?: number; // ? is set as optional value
    y?: number;
}

interface ChildGreeterProps extends AdderWithProps {
    z: number
}

// In the function, default value by destructuring the prop
export default function AdderWithPropDefault({x=-1.0,y=-2.5}: AdderWithProps){
    return (
        <p>Adder with Default Prop: The sum of {x} and {y} is {x + y}</p>
    )
}

export function AdderWithChildProps({x=2,y=4,z}: ChildGreeterProps){
    return  <p>Adder with Child Prop: The sum of {x} and {y} and {z} is {x + y + z}</p>
}