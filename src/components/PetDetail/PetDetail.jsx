const PetDetails = (props) => {
    return props.selected ? ( // if props.selected give back this
        <div>
            <h1> {props.selected.name}</h1>
            <h2>Breed: {props.selected.breed}</h2>
            <h2>Age: {props.selected.age}</h2>
            <button onClick={() => props.handleFormView(props.selected)}>
                Edit pet
            </button>
            <button onClick={() => props.handleDeletePet(props.selected._id)}>
                Delete Pet
            </button>

        </div>

    ) : ( // otherwise give back empty state
        <div>
            <h1>No details</h1>
        </div>
    )

}


export default PetDetails



// ? mark above says if unfefined just return undefid when accessing name , only acess name if selectdd is defiened, question mark allows thatif
