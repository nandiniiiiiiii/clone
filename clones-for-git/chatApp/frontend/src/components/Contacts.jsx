import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

function Contacts({ contacts, currentUser,changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(() => {
    if (currentUser) {
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {
        currentUserName && (
          <Container>
            <div className='brand'>
              <h1>Chat App</h1>
            </div>
            <div className='contacts'>
              {
                contacts.map((contact, index) => {
                  return (
                    <div
                      className={`contact ${index === currentSelected ? "selected" : ""}`}
                      key={index}
                      onClick={()=>changeCurrentChat(index,contact)}
                    >
                      <div className="username">
                        <h3>{contact.username}</h3>
                      </div>
                    </div>
                  );
                })
              }
            </div>
            <div className="current-user">
              <div className="username">
                <h1>{currentUserName}</h1>
              </div>
            </div>
          </Container>
        )
      }
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: rgb(214, 212, 212);
  .brand{
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    h1{
      text-transform: uppercase;
    }
  }
  .contacts{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: rgb(112, 112, 112);
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: rgb(112, 112, 112);
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .username {
        h3 {
          color: black;
        }
      }
    }
    .selected {
      background-color: #9a86f3;
    }
  }
  .current-user {
    background-color: rgb(67, 67, 67);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }

  }
`;

export default Contacts
