import { useState } from "react"


const DEFAULT_PET_STATE = {
    name: '',
    age: '',
    breed: ''
}

const PetForm = (props) => {

    const [formData, setFormData] = useState(props.selected || DEFAULT_PET_STATE)
    // if selected pet make that be state, other wise make default state

    // const [formData, setFormData] = useState({
    //     name: '',
    //     breed: '',
    //     age: ''
    // })

    const handleChange = (e) => {
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value})) //callback function- what ever the state is at the time, can use this instread of spread - ...FormData.. helps prevent errors (when have a form) e.target- key we are updating , e.target - value update
    }

    const handleSubmit = (e) => {
        e.preventDefault() // crrate funciton that prevents refresh
        props.updateFnToUse(formData) // involks handle add pet function which takes form data as arg
    }



    return ( // data validation on the front end

        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    required
                    value={formData.name}
                />

                <label htmlFor="Breed">Breed</label>
                <input
                    id="breed"
                    name="breed"
                    type="text"
                    onChange={handleChange}
                    value={formData.breed}
                />

                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    name="age"
                    type="number"
                    onChange={handleChange}
                    required
                    value={formData.age}
                />
                <button type="submit">{props.selected ? 'Edit Pet' : 'Add New Pet'}</button>
            </form>
        </div>


    )

}



export default PetForm
