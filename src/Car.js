import DisplayCars from "./DisplayCars";

function Car(props) {
    const car = props.cars;
    car.sort()
    return (
        <>
            <h3>
                Hi, you have {car.length} Cars! and the cars are:
            </h3>
            <ol>
                {car.map((item) => <DisplayCars brand={item} />)}
            </ol>
        </>
    );
}

export default Car;