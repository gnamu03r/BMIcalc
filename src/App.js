import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [order, setOrder] = useState('Enter your details');

  //logic
  const calculateBmi = (e) => { 
    e.preventDefault();
    if (isNaN(height) || isNaN(weight) || height === '' || weight === '' || height<=0 || weight<0) {
      alert('Please enter valid height and weight');
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(1);
      setBmi(bmi);
      setOrder('Your BMI is: ');
      if (bmi < 18.5) {
        setMessage('You are underweight');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are healthy');
      } else { 
        setMessage('You are overweight');
      }
    }
  }

  const reset = (e) => {
    e.preventDefault();
    setHeight('');
    setWeight('');
    setBmi('');
    setMessage('');
    setOrder('Enter your details');
    }

  return (
    <div className='App'>
      <div className='header'>
        <h1 className='title'>MINI-PROJECT</h1>
        <h3 className='author'>~by gnamu03r</h3>
      </div>
      <div className='container'>
        <h1 className='center'>BMI Calculator</h1>
        <form onSubmit={calculateBmi}>
          <div className='form-control'>
            <label>Height (in cm)</label>
            <input onChange={(e) => setHeight(e.target.value)} value={height} type='number' name='height' placeholder='Enter height' />
          </div>
          <div className='form-control'>
            <label>Weight (in kg)</label>
            <input onChange={(e) => setWeight(e.target.value)} value={weight} type='number' name='weight' placeholder='Enter weight' />
          </div>
          <button type='submit' className='btn'>Calculate</button>
          <button  type='submit' className='btn' onClick={reset}>Reset</button>
          <div className='center'>
            <h3>{order} {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    
    </div>
  )
}

export default App