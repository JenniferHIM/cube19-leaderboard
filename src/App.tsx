import React from 'react';
import Title from './components/Title/Title';
import Container from './components/Container/Container';
import LeadersList from './components/LeadersList/LeadersList';

function App() {
  return (
    <>
      <Container>
        <Title />
        <LeadersList />
      </Container>
    </>
  );
}

export default App;
