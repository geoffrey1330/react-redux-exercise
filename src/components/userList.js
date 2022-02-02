import React, {useState} from 'react';

const UserList = ({users, openAdd,openDelete}) => {
    const [sortedUsers, setSortedUsers] = useState();
    const [upward, setUpward] = useState();
    const userr = users.map(user =>
    {

        return (
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
    });
    const sortUsers = () => {
        let sorted = users.slice();
        {
            upward ?
                sorted.sort((x,y) =>
                {
                    let UserX = x.username.toLowerCase();
                    let UserY = y.username.toLowerCase();
            
                    return (UserX < UserY) ? -1 : (UserX > UserY) ? 1 : 0;
                }) :  sorted.sort((x, y) =>
                {
                    let UserX = x.username.toLowerCase();
                    let UserY = y.username.toLowerCase();
            
                    return (UserX > UserY) ? -1 : (UserX < UserY) ? 1 : 0;
                })
        
        }
        const sortedUsers = sorted.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address? user.address.city : ''}</td>
                    <td><button type="button" className="btn btn-warning td-btn" onClick={() => openAdd(user.id)}>Edit</button></td>
                    <td><button type="button" className="btn btn-danger td-btn" onClick={() => openDelete(user.id)}>Delete</button></td>
                </tr>
            )
        })
        setSortedUsers(sortedUsers);
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
                        onClick={() => { setUpward(true);sortUsers()}}>
                   &#8593;
                    </button>
                <button 
                type="button" 
                className="btn btn-primary arrow-btn" 
                        onClick={() => { setUpward(false);sortUsers()}}>
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
                    {sortedUsers ? sortedUsers : userr  }
            </tbody>
        </table>
        </div>
    )

}

export default UserList;