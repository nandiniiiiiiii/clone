import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import {Logout} from '../pages/index';

function ChatContainer({ currentChat }) {
    const [username, setUserName] = useState('');
    useEffect(() => {
        if (currentChat) {
            setUserName(currentChat.username);
        }
    }, [currentChat]);
    return (
        <Container>
            <div className='chat-header'>
                <div className='userdetails'>
                    <h3>{username}</h3>
                </div>
                <Logout/>
            </div>
            <div className="messagecontainer">

            </div>
            <div className="inputcontainer"></div>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 10% 80% 10%;
    gap: 0.1rem;
    overflow: hidden;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-rows: 15% 70% 15%;
    }
    color: white;
    background-color: rgb(112, 112, 112);
    span{
        color: #9a86f3;
    }
    .chat-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(67, 67, 67);
        width: 100%;
        height: 100%;
        .userdetails {
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justfy-content: center;
          gap: 1rem;
          h3 {
            color: white;
          }
        }
    }

`;

export default ChatContainer
