import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Logout } from '../pages/index';
import ChatInput from './ChatInput';
import Message from './Message';
import axios from 'axios';

function ChatContainer({ currentUserId, currentChat }) {
    const [username, setUserName] = useState('');
    const [messages, setMessage] = useState([]);

    const handleMSG = (msg) => {
        const data = {
            from: currentUserId,
            to: currentChat._id,
            message: msg,
        }
        axios
            .post(`http://localhost:8000/api/message/msgsend`, data)
            .then((res) => {
                console.log("data sent successfuly");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (currentChat) {
            setUserName(currentChat.username);
        }
        console.log(currentUserId, "hello1");
    }, [currentChat]);

    useEffect(() => {
        if (currentChat) {
            const msgdata = {
                from: currentUserId,
                to: currentChat._id,
            }
            axios
                .post(`http://localhost:8000/api/message/getallmsg`, msgdata)
                .then((res) => {
                    setMessage(res.data);
                    console.log(messages)
                })
                .catch((error) => {
                    console.log(error);
                })
        }

    }, [currentChat])


    return (
        <Container>
            <div className='chat-header'>
                <div className='userdetails'>
                    <h3>{username}</h3>
                </div>
                <Logout />
            </div>
            <div className="messagecontainer">
                {/* <Message messages={messages} /> */}
                {
                    messages.map((message) => {
                        return (
                            <div key={message._id}>
                                <div
                                    className={`message ${message.fromSelf ? "sender" : "recieved"
                                        }`}
                                >
                                    <div>
                                        <p>{message.message}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="inputcontainer">
                <ChatInput handleMSG={handleMSG} />
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 10% 80% 10%;
    gap: 0.1rem;
    overflow: hidden;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-rows: 15% 60% 25%;
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
