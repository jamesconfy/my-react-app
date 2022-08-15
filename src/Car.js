import DisplayCars from "./DisplayCar";

function Car(props) {
    const car = props.cars;
    return (
        <>
            <h3>
                Hi, you have {car.length} Cars! and the cars are:
            </h3>
            <ul>
                {car.map((item) => <DisplayCars brand={item} />)};
            </ul>
        </>
    );
}

export default Car;