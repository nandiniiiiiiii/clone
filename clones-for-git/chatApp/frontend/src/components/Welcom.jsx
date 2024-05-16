import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function Welcom({ currentUser }) {
    const [User, setUser] = useState("")
    useEffect(() => {
        if (currentUser) {
            setUser(currentUser.username);
        }
    }, [currentUser]);
    return (
        <Container>
            <h1>Welcom, <span>{User}</span> </h1>
            <h3>Select a chat to start Messaging.</h3>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    background-color: rgb(112, 112, 112);
    span{
        color: #9a86f3;
    }
`;

export default Welcom
