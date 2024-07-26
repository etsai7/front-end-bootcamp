
// By placing it inline, it is not re-usable compared to an Interface in AdderWithProp
export default function AdderWithProp(props: {x: number,y: number}){
    return (
        <p>Adder with Prop Inline: The sum of {props.x} and {props.y} is {props.x + props.y}</p>
    )
}