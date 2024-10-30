import { useState } from "react";


const StatfullForm = () => {

    const handleSubmitForm = e =>{
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(number);
    }
    // declare state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState(null);

// handle name
    const handleSubmitName = e =>{
        console.log(e.target.value);
        setName(e.target.value);
    }

    // handle Email
    const handleSubmitEmail = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    // handle number
    const handleSubmitNumber = e =>{
        console.log(e.target.value);
        setNumber(e.target.value);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input onChange={handleSubmitName} className="border p-2 rounded-md w-full mb-2" type="text" name="name" placeholder="Name"/>
                <br />
                <input onChange={handleSubmitEmail} className="border p-2 rounded-md w-full mb-2" type="email" name="email" placeholder="Email"/>
                <br />
                <input onChange={handleSubmitNumber} className="border p-2 rounded-md w-full mb-2" type="text" name="number" placeholder="Number"/>
                <br />
                <input className="border p-2 rounded-md w-full cursor-pointer" type="submit" />
            </form>
        </div>
    );
};

export default StatfullForm;