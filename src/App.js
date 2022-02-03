import React, {useState,useEffect} from 'react';
import './App.css';

import {fetchUsers, createUser, DeletUser, EditUser} from './actions/actions';
import UserList from './components/userList';
import 'bootstrap/dist/css/bootstrap.css';
import AddUser from './components/addUser';
import DeleteUser from './components/deleteUser';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [showaddUser, setShowaddUser] = useState(false)
  const [showdeleteUser, setShowdeleteUser] = useState(false)
  const [userId, setUserId] = useState(null)

  const dispatch = useDispatch()
  const users = useSelector(state => state.users);

  const openAdd = (id) => { 
    setShowaddUser(true)
    setUserId(id)
  };
  const closeAdd = () => { 
    setShowaddUser(false)
    setUserId(null)
  };

  const openDelete = (id) => { 
    setShowdeleteUser(true)
    setUserId(id)
  };
  const closeDelete = () => { 
    setShowdeleteUser(false)
    setUserId(null)
  };

  useEffect(() => {
    
    dispatch(fetchUsers())

}, [])
  return (
    <main>
    <h1>Dashboard</h1>
     
    {!showaddUser ?
     <UserList 
     users={users} 
     openAdd={openAdd} 
     openDelete={openDelete} /> :
     <AddUser 
     editUser={EditUser} 
     users={users} 
     userId={userId} 
     createUser={createUser} 
     closeAdd={closeAdd} />
    } 
    {showdeleteUser && 
      <DeleteUser 
      closeDelete={closeDelete} 
      userId={userId} 
      deleteUser={DeletUser} />}
  </main>
   );
}

export default App;

