import './App.css';
import Greeter from './Greeter.tsx';
import Adder from './Adder.tsx';
import AdderWithPropInterface from './AdderWithPropInterface.tsx';
import AdderWithPropsInline from './AdderWithPropsInline.tsx';
import AdderWithPropDefault from './AdderWithPropDefault.tsx';
import GreetPerson from './Person.tsx';

function App() {

  let result = 2 + 4;
  let person = {
    firstName : 'James',
    lastName : 'Lee',
    city : 'NYC'

  }

  return (
    <>
      <Greeter />
      <Adder x={2} y={3}/>
      <AdderWithPropInterface x={10.8} y={20} />
      <AdderWithPropsInline x={50} y={100}/>
      <AdderWithPropDefault />
      <p>The sum of 2 + 4 is {result}</p>

      <GreetPerson person={person} />
    </>
  )
}

export default App
