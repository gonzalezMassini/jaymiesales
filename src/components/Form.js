import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Alert } from '@mui/material';


function Form({ sendEmail }) {
  const [inputState, setInputState] = useState({"Nombre":"", "Email":"", "Teléfono":"", "Municipio":"","Ultimo pago de luz":"","Empirica mas de 630?":"", "Dueño de casa?":"" })

  const changeHandler =(e)=>{
    setInputState({...inputState, [e.target.name]: e.target.value})
  }

  const [alert, setAlert] = useState(false)


  const handleChangeEmpirica = (event) => {
    setInputState({...inputState, "Empirica mas de 630?": event.target.value})
  };

  const handleChangeOwner = (event)=>{
    setInputState({...inputState, "Dueño de casa?": event.target.value})
  }

  const wait = async (ms) =>
    new Promise((resolve) => {
        setTimeout(resolve, ms);
    });

  const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log(inputState);

      if(!inputState["Nombre"] || !inputState["Email"] || !inputState["Teléfono"]
      || !inputState["Municipio"] || !inputState["Ultimo pago de luz"] || !inputState["Dueño de casa?"]){
        setAlert(true)
        await wait(5000)
        setAlert(false)
      }else{
        axios.post('https://sheet.best/api/sheets/c4b389ec-d858-4bb8-b51c-f648b3813079', inputState)
        .then(response => {
          console.log(response);
          setInputState({"Nombre":"", "Email":"", "Teléfono":"", "Municipio":"","Ultimo pago de luz":"","Empirica mas de 630?":"", "Dueño de casa?":"" })
        })
      }
  
  }

  return (
    <form >
      <div className='item'>
        <label>Nombre y Apellido:</label>
        <input type='text' className='input' placeholder='Nombre' value={inputState.Nombre} name='Nombre' required onChange={(e)=>changeHandler(e)} />
      </div>
      <div className='item'>
        <label>Email:</label>
        <input className='input' type='text' placeholder='Email' value={inputState.Email} name='Email' required onChange={(e)=>changeHandler(e)} />
      </div>
      <div className='item'>
        <label>Teléfono:</label>
        <input className='input' type='phone' placeholder='Teléfono' value={inputState.Teléfono} name='Teléfono' required onChange={(e)=>changeHandler(e)} />
      </div>
      <div className='item'>
        <label>Municipio:</label>
        <input className='input' type='text' placeholder='Municipio' value={inputState.Municipio} name='Municipio' required onChange={(e)=>changeHandler(e)} />
      </div>
      <div className='item'>
        <label>Ultimo pago de luz:</label>
        <input className='input' type='number' placeholder='Ultimo pago de luz' value={inputState["Ultimo pago de luz"]} name='Ultimo pago de luz' required defaultValue={0} onChange={(e)=>changeHandler(e)}/>
      </div>
      <div className='item owner'>
        <label>Empirica mas de 630? :</label>
        {/* <select id="select" placeholder='Empirica' 
          name='Empirica mas de 630?'
          required onChange={(e)=>changeHandler(e)} value={inputState["Empirica mas de 630?"]} >
          <option selected disabled>--select--</option>
          <option value="si">Si</option>
          <option value="no">No</option>
        </select> */}
      </div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputState["Empirica mas de 630?"]}
            label="Empirica mas de 630?"
            onChange={handleChangeEmpirica}
          >
            <MenuItem value={"Si"}>Si</MenuItem>
            <MenuItem value={"No"}>No</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div className='item owner'>
        <label>Dueño de casa? :</label>
        {/* <select id="select" value={inputState["Dueño de casa?"]} placeholder='Dueño de casa?' 
          name='Dueño de casa?'
          required onChange={(e)=>changeHandler(e)} >
          <option selected disabled>--select--</option>
          <option value="si">Si</option>
          <option value="no">No</option>
        </select> */}
      </div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputState["Dueño de casa?"]}
            label="Dueño de casa?"
            onChange={handleChangeOwner}
            required
          >
            <MenuItem value={"Si"}>Si</MenuItem>
            <MenuItem value={"No"}>No</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {alert && <Alert onClose={() => {setAlert(false)}} style={{marginTop:"1em"}} variant="filled" severity="error">
        A field is missing — check it out!
      </Alert>}
      <button className='btn' type='submit' value='Send' onClick={(e)=> handleSubmit(e)}>
        Send Message
      </button>

    </form>
  );
}

export default Form;
