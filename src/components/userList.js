import React, {useState} from 'react';

const UserList = ({users, openAdd,openDelete}) => {
    const [sorted, setSorted] = useState();

    const sortUsers = (ascend) =>
    {
        let sorte = users.slice();
         {
             ascend ?
                sorte.sort((x, y) =>
                {
                    let UserX = x.username.toLowerCase();
                    let UserY = y.username.toLowerCase();
            
                    return (UserX < UserY) ? -1 : (UserX > UserY) ? 1 : 0;
                }) : sorte.sort((x, y) =>
                  {
                     let UserX = x.username.toLowerCase();
                     let UserY = y.username.toLowerCase();
            
                     return (UserX > UserY) ? -1 : (UserX < UserY) ? 1 : 0;
                 })
        
        }
        setSorted(sorte)
    }
   
    return (
        <div className="card">
        <div className="add-row">
            <div>
                <h4>User List</h4>
            </div>
            <div>
            <button 
                type="button" 
                className="btn btn-primary arrow-btn" 
                        onClick={() =>sortUsers(true)}>
                   &#8593;
                    </button>
                <button 
                type="button" 
                className="btn btn-primary arrow-btn" 
                        onClick={() => sortUsers(false)}>
                   &#8595;
                </button> 
                <button 
                type="button" 
                className="btn btn-primary add-btn" 
                onClick={() =>openAdd()}>
                    Add New
                </button>
                
            </div>
            </div>
            {users.length === 0 ? <h1>No User On this Table</h1> :
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sorted?
                            
                            sorted.map(user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address ? user.address.city : ''}</td>
                                    <td><button type="button" className="btn btn-warning td-btn" onClick={() => openAdd(user.id)}>Edit</button></td>
                                    <td><button type="button" className="btn btn-danger td-btn" onClick={() => openDelete(user.id)}>Delete</button></td>
                                </tr>
                            ) :
                            users.map(user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address ? user.address.city : ''}</td>
                                    <td><button type="button" className="btn btn-warning td-btn" onClick={() => openAdd(user.id)}>Edit</button></td>
                                    <td><button type="button" className="btn btn-danger td-btn" onClick={() => openDelete(user.id)}>Delete</button></td>
                                </tr>
                            )
                          
                        }
                    </tbody>
                </table>}
                
        </div>
    )

}

export default UserList;