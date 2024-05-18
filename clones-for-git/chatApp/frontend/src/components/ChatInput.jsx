import React, { useState } from 'react'
import styled from 'styled-components';
import EmojiPicker from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io'
import { BsEmojiSmileFill } from 'react-icons/bs'

function ChatInput({ handleMSG }) {
    const [showEmoji, setShowEmoji] = useState(false);
    const [msg, setMsg] = useState("");

    const handleEmojiHideShow = () => {
        setShowEmoji(!showEmoji);
    }
    const handleEmojiClick = (event, emojiObj) => {
        let message = msg;
        const img = document.createElement('img');
        img.src = `${emojiObj.target.src}`;
        img.alt = 'Description of image';
        // textRef.current.appendChild(img);
        message = message + img
        console.log(emojiObj.target.src);
        setMsg(message);
    }
    const sendChat = (event, emjoi) =>{
      event.preventDefault()
      if(msg.length > 0){
        handleMSG(msg);
        setMsg('');
      }
    }
    return (
        <Container>
            <div className="button-container">
                <div className="emoji">
                    <BsEmojiSmileFill onClick={handleEmojiHideShow} />
                    {showEmoji && <EmojiPicker className='emoji-picker-react' onEmojiClick={handleEmojiClick} />}
                </div>
            </div>
            <form className="input-container" onSubmit={(e)=> sendChat(e)}>
                <input 
                    type='text' 
                    placeholder='Enter your text...' 
                    value={msg} 
                    onChange={(e) => setMsg(e.target.value)} />
                <button className='submitbtn'><IoMdSend /></button>
            </form>
        </Container>
    )
}

const Container = styled.div`
display: grid;
align-items: center;
grid-template-columns: 5% 95%;
background-color: rgb(67, 67, 67);
height: 100%;
@media screen and (min-width: 720px) and (max-width: 1080px) {
  gap: 1rem;
}
.button-container {
  display: flex;
  align-items: center;
  color: white;
  gap: 1rem;
  .emoji {
    position: relative;
    padding: 0 0 0 0.5rem;
    svg {
      font-size: 1.5rem;
      color: #ffff00c8;
      cursor: pointer;
    }
    .emoji-picker-react {
      position: absolute;
      top: -450px;
      height: 50px;
      background-color: #080420;
      box-shadow: 0 5px 10px #9a86f3;
      border-color: #9a86f3;
      .emoji-scroll-wrapper::-webkit-scrollbar {
        background-color: #080420;
        width: 5px;
        &-thumb {
          background-color: #9a86f3;
        }
      }
      .emoji-categories {
        button {
          filter: contrast(0);
        }
      }
      .emoji-search {
        background-color: transparent;
        border-color: #9a86f3;
      }
      .emoji-group:before {
        background-color: #080420;
      }
    }
  }
}
.input-container {
  width: 99%;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: #ffffff34;
  margin: 0 1rem 0 0;
  input {
    width: 90%;
    height: 10px;
    background-color: transparent;
    color: white;
    border: none;
    padding-left: 1rem;
    &::selection {
      background-color: #9a86f3;
    }
    &:focus {
      outline: none;
    }
  }
  button {
    padding: 0.3rem 1.5rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9a86f3;
    border: none;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      padding: 0.1rem 1rem;
      svg {
        font-size: 1rem;
      }
    }
    svg {
      font-size: 1.5rem;
      color: white;
    }
  }
}
`

export default ChatInput
