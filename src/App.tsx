import React from 'react';
import HighScore from 'components/HighScore/HighScore';
import Title from './components/Title/Title';
import Container from './components/Container/Container';
import LeadersList from './components/LeadersList/LeadersList';

function App() {
  return (
    <>
      <Container>
        <HighScore />
        <Title />
        <LeadersList />
      </Container>
    </>
  );
}

export default App;
