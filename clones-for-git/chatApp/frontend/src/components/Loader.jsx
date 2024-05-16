import React from 'react'
import { PacmanLoader } from 'react-spinners';

function Loader() {
  return (
    <Container>
      <PacmanLoader
        color="rgba(251, 138, 0, 1)"
        size={40}
        speedMultiplier={1}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-40%,300%);
`

export default Loader
