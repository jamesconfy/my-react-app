import Car from "./Car";

function Garage(props) {
    //    const car = props.cars;
    // const shoot = (a, b) => {
    //     alert(a);
    // }
    if (props.cars.length > 0) {
        return (
            <>
                <h1 id="demo">Who lives in my Garage?</h1>
                <Car color="red" cars={props.cars} />
            </>
        )
    } else {
        return (
            <>
                <h1 id="demo">Who lives in my Garage?</h1>
                <h3>You have no car in stock!</h3>
            </>
        )
    }
}

export default Garage;