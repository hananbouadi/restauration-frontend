import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
       const FetchData = async()=>{
            const resp = await axios.get('http://127.0.0.1:8000/api/user')
            console.log(resp.data)
            setUsers(resp.data)
       }
       FetchData()
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {
                users.map(user => {
                    return(
                    <li key={user.id}>
                        {user.name} - {user.email}
                        {/* Add buttons for editing and deleting user */}
                        <button onClick={() => handleEdit(user.id)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                    )
                   
})
                }
            </ul>
        </div>
    );

    // // Function to handle editing a user
    // const handleEdit = (userId) => {
    //     // Implement logic to navigate to edit user page or show modal for editing
    // };

    // // Function to handle deleting a user
    // const handleDelete = (userId) => {
    //     // Confirm deletion with user and then delete user via API
    //     if (window.confirm('Are you sure you want to delete this user?')) {
    //         axios.delete(`/api/users/${userId}`)
    //             .then(response => {
    //                 // Remove deleted user from state
    //                 setUsers(users.filter(user => user.id !== userId));
    //             })
    //             .catch(error => {
    //                 console.error('Error deleting user:', error);
    //             });
    //     }
    // };
};

export default UserList;
