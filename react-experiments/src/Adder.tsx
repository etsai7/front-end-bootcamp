// Props is the default and always the first argument containing like a map of keys and values
export default function Adder(props){
    return (
        <p>Adder with Prop: The sum of {props.x} and {props.y} is {props.x + props.y}</p>
    )

}

