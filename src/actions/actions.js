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

export const DeletUser = (id)=> async (dispatch) => {

    try {
        const { data } = await axios.delete(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`)
        dispatch({
            type: DELETE_USER,
            payload:id
        })

        
    }  
    catch (error)
    { 
        console.log(error)
    }
}

export const EditUser = (dat)=> async (dispatch) => {
    const id = dat.userId;
   // const res = data;
   
    try
    {
        const { data } = await axios.patch(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`, dat.data)
        console.log(data)
        dispatch({
            type: EDIT_USER,
            payload: {data, id}
        })
      
    }  
    catch (error)
    { 
        console.log(error)
    }
}