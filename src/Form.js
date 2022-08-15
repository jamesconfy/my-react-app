import { useState } from "react";

function MyForm() {
    const [inputs, setInputs] = useState("");
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
    );

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleTextChange = (event) => {
        setTextarea(event.target.value)
    }

    const processSubmit = (event) => {
        event.preventDefault();
        alert(`Your username is ${inputs.username}\nYou are ${inputs.age} years old!\nText Area is ${textarea}`)
    }

    return (
        <>
            <form onSubmit={processSubmit}>
                <label>Enter your name:
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter your age:
                    <input
                        type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <textarea value={textarea} onChange={handleTextChange} />
                <input type="submit" />
            </form>
        </>
    );
}

export default MyForm;