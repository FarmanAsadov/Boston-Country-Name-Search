import { useEffect, useState } from 'react';
import './App.css';
import Displaybox from './components/display/displayBox';
import FormTable from './components/form-table/formTable';

function App() {
  const [cName,setcName] = useState('');
  const [cPopulation,setcPopulation] = useState('');
  const [search,setSearch] = useState('');

  const baseURL = 'https://restcountries.com/v3.1/name/'

  const fetchData = async () => {
    try{
      const response = await fetch(`${baseURL}${search}`);
      const data = await response.json();
      
      if(data.length > 0){
        setcName(data[0].capital);
        setcPopulation(data[0].population);
      }
      else{
        setcName('No Data Found');
        setcPopulation('No Data Found');
      }
        
      
    }
    catch(error){
      console.log('error',error)
    }


  }

  useEffect(()=>{fetchData()},[search])


  return (
    <>
      <FormTable onFormSubmit={setSearch} />
      <Displaybox capital = {cName} population={cPopulation} />
      
    </>
  );
}

export default App;
