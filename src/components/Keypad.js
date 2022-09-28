import React from 'react'

function Keypad() {
  const handleChange = () => {
    console.log('Entering password...');
  }
  return (
    <form action="">
      <input type="password" onChange={handleChange} />
    </form>
  )
}

export default Keypad