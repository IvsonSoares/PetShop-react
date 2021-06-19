import React, {useState} from 'react';
import { BsX } from 'react-icons/bs';

import {ModalBg,
        ModalBtnClose,
        ModalContainer,
        ModalH1,
        ModalImg,
        ModalP


} from './modalElements'

const  Modal = () => {




    return (
        <>
            <ModalBg>
                 <ModalBtnClose><BsX/></ModalBtnClose>
                <ModalContainer>
                   
                    <ModalH1>Hello</ModalH1>
                    <ModalImg></ModalImg>
                    <ModalP>Hello</ModalP>
                </ModalContainer>
            </ModalBg>
        </>
    )
}

export default Modal
