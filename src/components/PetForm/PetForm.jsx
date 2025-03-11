import { useState } from "react"

const PetForm = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        breed: '',
        age: ''
    })

    const handleChange = (e) => {
        setFormData((prev) => ({...prev, [e.target.name] : e.target.value })) //callback function- what ever the state is at the time, can use this instread of spread - ...FormData.. helps prevent errors (when have a form) e.target- key we are updating , e.target - value update
    }

    const handleSubmit = (e) => {
        e.preventDefault() // crrate funciton that prevents refresh
        props.handleAddPet(formData) // involks handle add pet function which takes form data as arg

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
                />

                <label htmlFor="Breed">Breed</label>
                <input
                    id="breed"
                    name="breed"
                    type="text"
                    onChange={handleChange}
                />

                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    name="age"
                    type="number"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add New Pet</button>
            </form>
        </div>


    )

}



export default PetForm
