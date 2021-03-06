import React, { useState} from 'react'
import { ModalContainer } from '../ModalContainer/ModalContainer'
import { FormSendTweet } from '../FormSendTweet/FormSendTweet'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { TWEETS_STORAGE } from '../../utils/constants'
import moment from 'moment';

import './SendTweet.scss'

export const SendTweet = (props) => {
    const {setToastProps, allTweets} = props;
    const [ isOpenModal, setIsOpenModal ] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    }
    const closeModal = () => {
        setIsOpenModal(false);
    }

    const sendTweet = (event, formValaue) => {
        event.preventDefault();
        // console.log("Tweet enviado...");
        // console.log(formValaue);
        const { name, tweet } = formValaue;
        let allTweetsArray = []; 

        if (allTweets) {
            allTweetsArray = allTweets;
        } 

        if(!name || !tweet) {
            // console.log('WARNING: Todos los campos son obligatorios');
            setToastProps({
                open: true, 
                text: 'WARNING: Todos los campos son obligatorios'
            });
        } else {
            formValaue.time = moment(); 
            allTweetsArray.push(formValaue);
            localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
            console.log ('tweet enviado correctamente'); 
            setToastProps({
                open: true, 
                text: 'Tweet enviado correctamente'
            });
            closeModal();
        }

        allTweetsArray = [];
    }

    return (
        <div className='send-tweet'>
            <Fab className='send-tweet__open-modal' 
            color="primary" 
            aria-label="add" 
            onClick={openModal}
            >
                <AddIcon />
            </Fab>
            <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
                <FormSendTweet sendTweet={ sendTweet }/>
            </ModalContainer>
        </div>
    )
}    
   