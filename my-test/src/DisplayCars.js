const DisplayCars = (props) => {
    return (
        <div >
            <ul>
               {props.carsList.map((car) => {
                   return (
                    <li key={car.regNo}>
                    <span>{car.name} </span>
                    <span>{car.date} </span>
                    <span>{car.amount} </span>
                    <br/>
                    </li>
                   )
               })}
            </ul>
        </div>
    )
}

export default DisplayCars