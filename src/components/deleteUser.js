import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DeleteUser = ({closeDelete,userId, deleteUser}) => {
    const dispatch = useDispatch()
    const deleteHandler = () => {
        dispatch(deleteUser(userId));
        closeDelete()
    }
    return (
        <div className="delete-modal">
            <div className="delete-card card">
                <div>
                    <h4 >Are you sure you want to delete this user?</h4>
                </div>
                <div className="modal-btn-card">
                    <button className="btn btn-dark" onClick={closeDelete}>Cancel</button>
                    <button 
                    className="btn btn-danger" 
                    onClick={deleteHandler}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteUser