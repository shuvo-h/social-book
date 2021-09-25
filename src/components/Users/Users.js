import React, { useEffect, useState } from 'react';
import DetailsInfo from '../DetailsInfo/DetailsInfo';
import Profile from '../Profile/Profile';
import './users.css'

const Users = () => {
    const [users,setUsers] = useState([]);
    const [info,setInfo] = useState([]);
    useEffect(()=>{
        fetch('https://myfakeapi.com/api/users/')
            .then(res=>res.json())
            .then(data => setUsers(data.Users))
    },[])
    const handleDetails = (props) =>{
        setInfo(props);
    }
    return (
        <div className="book-container">
            <div className='book'>
                {
                    users.map(user => <Profile key={user.id} handleDetails={handleDetails} user={user}></Profile>)
                }
            </div>
            <div>
                {
                    info.id ? <DetailsInfo info={info}></DetailsInfo> : false
                }
            </div>
        </div>
    );
};

export default Users;