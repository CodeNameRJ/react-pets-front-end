import { useEffect, useState } from 'react';
import './App.css'
import { index } from './services/petService';


const App = () => {


  const getPets = async () => {
    console.log(await index())
  }

  useEffect(() => {
    getPets()
  }, [])



  return <h1>Hello world!</h1>;
};

export default App;
