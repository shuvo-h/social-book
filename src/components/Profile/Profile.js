import React from 'react';
import './profile.css';

const Profile = (props) => {
    const {first_name, last_name, avatar, birthdate, gender} = props.user;
    // console.log(props);
    return (
        <div className='profile-container'>
            <div>
                <img src={avatar} alt="" />
            </div>
            <div>
                <p>{first_name} {last_name}</p>
                <p>Birthday: {birthdate} ({gender})</p>
                <button onClick={()=>props.handleDetails(props.user)}>details</button>
            </div>
        </div>
    );
};

export default Profile;