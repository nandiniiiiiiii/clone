import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components" //helps in styling 

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("form");
  }
  const handlechange = (e) => {

  }
  return (
    <FormContainer>
      <form onSubmit={(e) => handleSubmit(e)} className='container'>
        <h1 className='title'>
          Chat app
        </h1>
        <div className='box'>
          <input type='text'
            placeholder='Username'
            name='Username'
            onChange={(e) => handlechange(e)}
          />
          <input type='email'
            placeholder='Email'
            name='Email'
            onChange={(e) => handlechange(e)}
          />
          <input type='password'
            placeholder='Password'
            name='Password'
            onChange={(e) => handlechange(e)}
          />
          <button type='submit'>Create Account</button>
          <span>Already have an account ? <Link to="/login">Login</Link></span>
        </div>
      </form>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: black;
  color: white;
  .title{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    height: 50vh; 
    width: 50vw;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    h1{
      font-size: 3rem;
      text-transform: uppercase;
    }
  }
  input{
    width: 25vw;
    height: 5vh;
    border: 2px white solid;
    color: white;
    font-size: 1rem;
    &:focus{
      width: 26vw;
      height: 6vh;
    }
  }
  button{
    width: 25vw;
    height: 7vh;
    cursor: pointer;
    font-size: 1.2rem;
  }
  .box{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    border: 2px white solid;
    padding: 60px 50px;
  }
`;

export default Register
