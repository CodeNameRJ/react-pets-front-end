import { useState } from "react"

const PetList = (props) => {
    // console.log(props)

    const [isHovered, setIsHovered] = useState(false)



    return (
        <div>
            <h1>Pet List </h1>
            <div>
                {!props.pets ? (
                    <h2>No pets yet</h2>
                ) : (
                <ul>
                    {
                        props.pets.map((pet) => (
                            <li
                              key={pet._id}
                              style={{
                                backgroundColor: isHovered ? 'lightblue' : '#888',
                                padding: '10px',
                                transition: 'background-color 0.3s ease' }}
                              onClick={() => props.handleSelect(pet)}
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              >{pet.name}</li>
                        ))
                    }
                </ul>
                )}
            </div>

            <button onClick={props.handleFormView}>
                {props.isFormOpen ? 'Close Form' : 'New Pet'}

            </button>

        </div>
    )

}


export default PetList

//added inline css
//mapping over peets to create list item
// if falsy value, empty array then true
// no pets? other wise give me my unordered List
