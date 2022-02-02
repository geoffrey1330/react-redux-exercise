import axios from 'axios';

import {FETCH_USERS, ADD_USER, DELETE_USER, EDIT_USER} from '../constants'

export const fetchUsers = ()=> async (dispatch)=> { 
    try
    {
       
    const { data } = await axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
    dispatch({
                    type: FETCH_USERS,
                    payload: data
                })
    }
    catch (error)
    { 
        console.log(error)
    }
}

export const createUser = (dat)=> async (dispatch) => {

    try {
        
        const { data } = await axios.post('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data', dat)
        dispatch({
               type: ADD_USER,
               payload: data
             })
    }  
    catch (error)
    { 
        console.log(error)
    }
}

export const DeletUser = (data)=> async (dispatch) => {

    try {
        dispatch({
            type: DELETE_USER,
            payload: data
        })

        
    }  
    catch (error)
    { 
        console.log(error)
    }
}

export const EditUser = (data)=> async (dispatch) => {
    const id = data.userId;
    const res = data;
    try {
        dispatch({
            type: EDIT_USER,
            payload: {res, id}
        })
      
    }  
    catch (error)
    { 
        console.log(error)
    }
}