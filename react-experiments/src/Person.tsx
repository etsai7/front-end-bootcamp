interface Person {
    firstName: string;
    lastName: string;
    city: string;
}

function GreetPerson({ person } : {person: Person}){
    return <p>Greetings {person.firstName} {person.lastName} of {person.city}</p>
}

export default GreetPerson;