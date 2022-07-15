import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Form({ sendEmail }) {
  const [inputState, setInputState] = useState({"Nombre":"", "Email":"", "Teléfono":"", "Municipio":"","Ultimo pago de luz":"","Empirica":"", "Dueño de casa?":"" })

  const changeHandler =(e)=>{
    setInputState({...inputState, [e.target.name]: e.target.value})
  }

  const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(inputState);
  
      axios.post('https://sheet.best/api/sheets/c4b389ec-d858-4bb8-b51c-f648b3813079', inputState)
      .then(response => {
        console.log(response);
        setInputState({"Nombre":"", "Email":"", "Teléfono":"", "Municipio":"","Ultimo pago de luz":"","Empirica mas de 630?":"", "Dueño":"" })
      })
  }

  return (
    <form >
      <div className='item'>
        <label>Nombre y Apellido:</label>
        <input type='text' placeholder='Nombre' value={inputState.Nombre} name='Nombre' required onChange={(e)=>changeHandler(e)} />
      </div>
      <div className='item'>
        <label>Email:</label>
        <input type='text' placeholder='Email' value={inputState.Email} name='Email' required onChange={(e)=>changeHandler(e)} />
      </div>
      <div className='item'>
        <label>Teléfono:</label>
        <input type='phone' placeholder='Teléfono' value={inputState.Teléfono} name='Teléfono' required onChange={(e)=>changeHandler(e)} />
      </div>
      <div className='item'>
        <label>Municipio:</label>
        <input type='text' placeholder='Municipio' value={inputState.Municipio} name='Municipio' required onChange={(e)=>changeHandler(e)} />
      </div>
      <div className='item'>
        <label>Ultimo pago de luz:</label>
        <input type='number' placeholder='Ultimo pago de luz' value={inputState["Ultimo pago de luz"]} name='Ultimo pago de luz' required defaultValue={0} onChange={(e)=>changeHandler(e)}/>
      </div>
      <div className='item owner'>
        <label>Empirica mas de 630? :</label>
        <select id="select" placeholder='Empirica' 
          name='Empirica mas de 630?'
          required onChange={(e)=>changeHandler(e)} >
          <option defaultValue={"--select--"} disabled>--select--</option>
          <option value="si">Si</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className='item owner'>
        <label>Dueño de casa? :</label>
        <select id="select" placeholder='Dueño de casa?' 
          name='Dueño de casa?'
          required onChange={(e)=>changeHandler(e)} defaultValue={"--select--"}>
          <option defaultValue={"--select--"} disabled>--select--</option>
          <option value="si">Si</option>
          <option value="no">No</option>
        </select>
      </div>
      <button className='btn' type='submit' value='Send' onClick={(e)=> handleSubmit(e)}>
        Send Message
      </button>
    </form>
  );
}

export default Form;
