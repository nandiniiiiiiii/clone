import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components" //helps in styling 
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  //creating error box
  const toastoptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if (handlevalidation()) {
      const { password, username, email } = value;
      const data = {
        username,
        email,
        password,
      }
      axios
        .post('http://localhost:8000/api/auth/register', data)
        .then(() => {
          console.log(data);
          localStorage.setItem("chat-app-user", JSON.stringify(data));
          navigate('/');
        })
        .catch((error) => {
          toast.error("Error occured"+error, toastoptions);
          console.log(error);
        });
    }
  }
  const handlevalidation = () => {
    const { password, username, email } = value;
    console.log(password, username, email);
    if (email === "" || password === "" || username === "") {
      toast.error("All feilds are required", toastoptions);
      return false;
    } else if (username.length < 5) {
      toast.error("username must be greater than 5 letters", toastoptions);
      return false;
    } else if (password.length < 5) {
      toast.error("password must be greater than 5 letters", toastoptions);
      return false;
    }
    return true;
  }
  const handlechange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)} className='container'>
          <h1 className='title'>
            Chat app
          </h1>
          <div className='box'>
            <input type='text'
              placeholder='Username'
              name='username'
              onChange={(e) => handlechange(e)}
            />
            <input type='email'
              placeholder='Email'
              name='email'
              onChange={(e) => handlechange(e)}
            />
            <input type='password'
              placeholder='Password'
              name='password'
              onChange={(e) => handlechange(e)}
            />
            <button type='submit'>Create Account</button>
            <span>Already have an account ? <Link className='link' to="/login">Login</Link></span>
          </div>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
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
    color: black;
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
    transition: 0.5s ease-in-out;
    &:hover{
      background-color: black;
      color: white;
      border: white 2px solid;
    }
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
  span{
    .link{
      text-decoration: none;
      color: blue;
    }
  }
`;

export default Register
