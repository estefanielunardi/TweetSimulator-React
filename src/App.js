import React, {useState, useEffect } from 'react';
import { Container, Snackbar } from '@material-ui/core/'
import { Header } from './Components/Header/header'
import { SendTweet } from './Components/SendTweet/SendTweet'
import { TWEETS_STORAGE } from './utils/constants';

import './App.scss';

function App() {

  const [ toastProps, setToastProps ] = useState({
    open: false,
    text: null
  });

  const [ allTweets, setAllTweets ] = useState([]); 

  useEffect(() => {
    const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(allTweetsStorage);
    setAllTweets(allTweetsArray);
  }, []);

  console.log(allTweets);

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet />
      <SendTweet setToastProps={setToastProps} allTweets={allTweets}/>

      <Snackbar 
        anchorOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
        open={toastProps.open}
        //hacer el on close
        autoHideDuration={1000}
        message={<span id="message-id">{toastProps.text}</span>}
      />
    </Container>
  );
}

export default App;