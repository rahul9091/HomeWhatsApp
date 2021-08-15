import types from '../types';
import store from '../store';

const {dispatch}= store;

export const chatData = (idR) => {
    console.log(idR,'id got in actions')
    dispatch({
        type:types.CHATDATA,
        payload:idR
    })
}

export const inputMsg = (input) => {
    console.log(input,'input in actons')
    dispatch({
        type:types.INPUT,
        payload:input
    })
}

export const image = (source) => {
    dispatch({
        type:types.IMAGE,
        payload:source
    })
}