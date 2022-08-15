import Car from "./Car";

function Garage() {
    const carName = "Ford";
    const shoot = (a, b) => {
        alert(a);
    }
    return (
        <>
            <h1 id="demo">Who lives in my Garage?</h1>
            <Car color="red" brand={carName} />
            <button onClick={(event) => shoot("Shoot your shot, you are going to score.\nGOALLLLLL!!!!")}>Click to Shoot!</button>
        </>
    );
}

export default Garage;