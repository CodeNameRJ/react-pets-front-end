import { useEffect, useState } from 'react';
import './App.css'
import { index } from './services/petService';
import PetList from './components/PetList/PetList';
import PetDetails from './components/PetDetail/PetDetail';
import PetForm from './components/PetForm/PetForm';

const App = () => {

  const [pets, setPets] = useState([]) // array destructuring
  const [selectedPet, setSelectedPet] = useState() //state to handle click event- what happens when user clicks on a pet from list
  const [isFormOpen, setIsFormOpen] = useState(false) // default value is false


  const handleSelect = (pet) => {
    setIsFormOpen(false)
    setSelectedPet(pet)
  }

  const handleFormView = () => {
    setIsFormOpen((prev) => !prev) // if false return true if true return false, does update when update occures not when functin is involked
  }

  const handleAddPet = async (formData) => {
    try {
      console.log(formData)
    } catch (err) {
      console.log(err)
    }
  }


  const getPets = async () => {
    // console.log(await index())
    try {
      const foundPets = await index() // await before we set pets
      if (foundPets.err) { // error handling
        throw new Error(foundPets.err)
      }
      setPets(foundPets) // result placed into state

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => { // makes a fetch call to all our API when the page loads // useEffect can not be async
    getPets() // function is invoked
  }, [])


// fragment below so we can put more than one component - to render
// petList accepts one prop called pets and we give it our pets state
  return(
    <>

      <PetList
        isFormOpen={isFormOpen}
        pets={pets}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
      />
      {
        isFormOpen ?
         <PetForm handleAddPet={handleAddPet}/>
      :
        <PetDetails selected={selectedPet}/>
      }



    </>




  )
};

export default App;
