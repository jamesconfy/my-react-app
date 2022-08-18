import { useState } from "react";

export default function MyForm() {
    const [inputs, setInputs] = useState("");
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
    );
    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleTextChange = (event) => {
        setTextarea(event.target.value)
    }

    const handleSelectChange = (event) => {
        setMyCar(event.target.value)
    }

    const processSubmit = (event) => {
        event.preventDefault();
        alert(`Your username is ${inputs.username}\nYou are ${inputs.age} years old!\nText Area is ${textarea}\nSelected value is ${myCar}`)
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
                        required
                    />
                </label>
                <br />
                <label>Enter your age:
                    <input
                        type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                        required
                    />

                </label>
                <br />
                <textarea value={textarea} onChange={handleTextChange} />
                <br />
                <select value={myCar} onChange={handleSelectChange}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
                <input type="submit" />
            </form >
        </>
    );
}