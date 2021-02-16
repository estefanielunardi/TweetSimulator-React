import React from 'react';
import { Container, Snackbar } from '@material-ui/core'
import { Header } from './Components/Header/header'
import { SendTweet } from './Components/SendTweet/SendTweet'

import './App.scss';

function App() {
  return (
      <Container className="tweets-simulator" maxWidth={false}>
        <Header/>
        <SendTweet />
      </Container>
  );
}

export default App;
