import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Contacts from '../components/Contacts';
import Welcom from '../components/Welcom';
import ChatContainer from '../components/ChatContainer';

function Chat() {
  const navigate = useNavigate();
  const [contact, setContact] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentUserId, setCurrentUserId] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('chat-app-user')) {
      navigate('/login');
    } else {
      setCurrentUser(JSON.parse(localStorage.getItem('chat-app-user')));
      setIsLoading(true);
    }
  }, [])
  useEffect(() => {
    if (currentUser) {
      axios
        .get(`http://localhost:8000/api/auth/allcontact/${currentUser._id}`)
        .then((res) => {
          setContact(res.data);
          setCurrentUserId(currentUser._id)
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }, [currentUser])
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <ChatContainers>
      <div className="container">
        <Contacts
          contacts={contact}
          currentUser={currentUser}
          changeChat={handleChatChange}
        />
        {
          isLoading && currentChat == undefined ? (
            <Welcom currentChat={currentChat} />
          ) : (
            <ChatContainer currentChat={currentChat} currentUserId={currentUserId} />
          )
        }
      </div>
    </ChatContainers>
  )
}

const ChatContainers = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  .container{
    height: 85vh;
    width: 85vw;
    background-color: white;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px){
      grid-template-clolumn: 35% 65%;
    }
    @media screen and (min-width: 360px) and (max-width: 480px){
      grid-template-clolumn: 35% 65%;
    }
  }
`

export default Chat
