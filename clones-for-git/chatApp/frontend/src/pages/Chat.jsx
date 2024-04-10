import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Contacts from '../components/Contacts';

function Chat() {
  const navigate = useNavigate();
  const [contact,setContact] = useState([]);
  const [currentUser,setCurrentUser] = useState(undefined);
  useEffect(()=>{
    if(!localStorage.getItem('chat-app-user')){
      navigate('/login');
    }else{
      setCurrentUser(JSON.parse(localStorage.getItem('chat-app-user')));
      console.log(currentUser);
    }
  },[])
  useEffect(()=>{
    if(currentUser){
      axios
      .get(`http://localhost:8000/api/auth/allcontact/${currentUser._id}`)
      .then((res)=>{
        setContact(res.data);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  },[currentUser])
  return (
    <ChatContainer>
      <div className="container">
        <Contacts contacts={contact}/>
      </div>
    </ChatContainer>
  )
}

const ChatContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  jsutify-content: center;
  aligin-item: center;
  gap: 1rem;
  background-color: black;
  .container{
    height: 85vh;
    width: 85vw;
    background-color: white;
    display: grid;
    @media screen and (min-width: 720px) and (max-width: 1080px){
      grid-template-clolumn: 35% 65%;
    }
    @media screen and (min-width: 360px) and (max-width: 480px){
      grid-template-clolumn: 35% 65%;
    }
  }
`

export default Chat
