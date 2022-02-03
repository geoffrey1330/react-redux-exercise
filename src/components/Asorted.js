const AsortUsers = ({users,openAdd,openDelete,setSortedUsers}) => {
    let sorted = users.slice();
        sorted.sort((x,y) =>
        {
            let UserX = x.username.toLowerCase();
            let UserY = y.username.toLowerCase();
    
            return (UserX < UserY) ? -1 : (UserX > UserY) ? 1 : 0;
        })
    
   
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
export default AsortUsers