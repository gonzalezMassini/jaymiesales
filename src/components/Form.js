import React from 'react';

function Form({ sendEmail }) {
  return (
    <form onSubmit={sendEmail}>
      <div className='item'>
        <label>Nombre y Apellido:</label>
        <input type='text' placeholder='Nombre y Apellido' name='name' required />
      </div>
      <div className='item'>
        <label>Email:</label>
        <input type='text' placeholder='Email' name='email' required />
      </div>
      <div className='item'>
        <label>Teléfono:</label>
        <input type='phone' placeholder='Teléfono' name='phone' required />
      </div>
      <div className='item'>
        <label>Dirección:</label>
        <input type='text' placeholder='Dirección' name='address' required />
      </div>
      <div className='item owner'>
        <label>Dueño de casa?:</label>
        <select id="select" placeholder='Dueño de casa?' 
          name='message'
          required>
          <option selected disabled>--select--</option>
          <option value="si">Si</option>
          <option value="no">No</option>
        </select>
      </div>
      <button className='btn' type='submit' value='Send'>
        Send Message
      </button>
    </form>
  );
}

export default Form;
