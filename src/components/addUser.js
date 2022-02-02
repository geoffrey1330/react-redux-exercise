import React, {useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const AddUser = ({editUser, users,userId,createUser,closeAdd}) => {
  const { register, handleSubmit,errors } = useForm();
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  

  const dispatch = useDispatch()
  
  let currentUser = userId && users.find(user => user.id === userId);
  useEffect(() => {
    const inputs = document.querySelectorAll('input');
    let toUpdate = [];
    
    setName(currentUser ? currentUser.name : '')
    setEmail(currentUser ? currentUser.email : '')
    
    inputs.forEach(input => {
     Object.keys(errors).forEach(key => {
      if (key === input.name) {
        toUpdate.push(input);
      } else {
        input.style.borderColor = "gray";
      }
     })
    })

    toUpdate.forEach(input => {
      input.style.borderColor = 'red';
    })
  }, [errors]);

  const submitHandler = (e) => {
    let data={email,name}
    //e.preventDefault()
    if (!userId) {
     
      dispatch(createUser(data));
      closeAdd();
    } else {
      
      dispatch(editUser({data, userId}));
      closeAdd();
    }
}

  return (
    <div className="card table-container">
      <div><div><h4>Form</h4></div>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label text-center">Name</label>
          <div className="col-sm-8">
            <input 
            className="form-control" 
            type="text" 
                placeholder="name" 
               
                name="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={register({required: true})}
              />
              <br />
              {errors.name && <span>Name is required</span>}
            <br />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label text-center">Email</label>
          <div className="col-sm-8">
            <input 
            className="form-control" 
            type="email" 
                placeholder="email" 
               
            name="email" 
            value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={register({required: true})}
              />
               <br />
              {errors.email && <span>Email is required</span>}
            <br />
          </div>
        </div> 
        <div className="btn-container">
          <button 
          className="btn btn-outline-danger cancel-btn form-btn" onClick={closeAdd}>Cancel</button>
          <input className="btn btn-success form-btn" value="Submit" type="submit" />
        </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser