function Car(props) {
    const car = props.cars;
    return (
        <>
            {
                car.length > 0 &&
                <h3>
                    Hi, you have {car.length} Cars!
                </h3>
            }
        </>
    );
}

export default Car;