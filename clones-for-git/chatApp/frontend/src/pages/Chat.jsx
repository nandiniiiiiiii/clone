import React from 'react'
import styled from 'styled-components';

function Chat() {
  return (
    <ChatContainer>
      <div className="container">

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
