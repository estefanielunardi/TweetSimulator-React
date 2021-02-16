import React, { useState} from 'react'
import { ModalContainer } from '../ModalContainer/ModalContainer'
import { FormSendTweet } from '../FormSendTweet/FormSendTweet'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import './SendTweet.scss'

export const SendTweet = () => {
    
    const [ isOpenModal, setIsOpenModal ] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    }
    const closeModal = () => {
        setIsOpenModal(false);
    }
    return (
       <div className="send-tweet">
           <Fab className="send-tweet__open-modal" 
           color='primary' 
           aria-label="add" 
           onClick={openModal}
           >
               <AddIcon  />
           </Fab>
           <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
               <FormSendTweet />
           </ModalContainer>
       </div>
    )
};