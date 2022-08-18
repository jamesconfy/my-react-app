import { useState, useEffect } from "react";

function Fetch() {
    const [data, setData] = useState(null);
    const url = "https://jsonplaceholder.typicode.com/todos"

    useEffect(() => {
        fetch(`${url}`, {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.id}: {item.title}<hr /></p>;

                })
            }
        </>
    );
}

export default Fetch