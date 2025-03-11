import { useEffect, useState } from 'react';
import './App.css'
import { create, deletePet, index, update } from './services/petService';
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

  const handleFormView = (pet) => {
    console.log(pet)
    setIsFormOpen((prev) => !prev) // if false return true if true return false, does update when update occures not when functin is involked
    if(!pet.id) {
      setSelectedPet(undefined)
    }
  }

  const handleAddPet = async (formData) => {
    try {
      const createdPet = await create(formData)
      // console.log(creaatedPet)
      // getPets() // gets all pets and set them in state if multiple ppl adding pets
      if(createdPet.err) { // error handling so we dont set that pet in state
        throw new Error(createdPet.err)
      }
      setPets(prev => [...prev, createdPet])
      setIsFormOpen(false)
    } catch (err) {
      console.log(err)
    }
  }


  const handleUpdatePet = async (formData) => {
    try {
      const updatedPet = await update(formData, selectedPet._id)
      // console.log(creaatedPet)
      // getPets() // gets all pets and set them in state if multiple ppl adding pets
      if(updatedPet.err) { // error handling so we dont set that pet in state
        throw new Error(updatedPet.err)
      }
      setPets(prev => [...prev.filter((pet) => pet._id !== updatedPet._id), updatedPet])
      setSelectedPet(updatedPet)
      setIsFormOpen(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeletePet = async (id) => {
    try {
      const deletedPet = await deletePet(id)

      if(deletedPet.err) {
        throw new Error(deletePet.err)
      }
      setPets(prev => [...prev.filter((pet) => pet._id !== deletedPet._id)])
      setSelectedPet(undefined)
    } catch (err) {
      console.log(err)
    }

  }



  const updateFnToUse = selectedPet ? handleUpdatePet : handleAddPet


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
         <PetForm updateFnToUse={updateFnToUse} selected={selectedPet}/>
      :
        <PetDetails selected={selectedPet} handleFormView={handleFormView} handleDeletePet={handleDeletePet}/>
      }

    </>
  )
};

export default App;
