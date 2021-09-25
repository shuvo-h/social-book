import React from 'react';
import './detailsInfo.css'

const DetailsInfo = (props) => {
    if(props.info.id){
        
    }
    
    const {avatar, birthdate, company_name, department, email, email_verified, first_name, gender, job_title, id, last_login, last_login_ip, last_name, password, phone, subscribed } = props.info;
    return (
        <div className="info-container">
            <h3>Display detalis</h3>
            <div>
                <img src={avatar} alt="" />
            </div>
            <div>
                <p><strong>{first_name} {last_name}</strong></p>
                <p><strong>BirthDay:</strong> {birthdate} ({gender})</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Email varification: </strong>{email_verified?"Varified user":'Unverified user'}</p>
                <p><strong>Job location:</strong> {company_name} ({department})</p>
                <p><strong>Job title: </strong>{job_title}</p>
                <p><strong>Employee ID: </strong>{id}</p>
                <p><strong>Last Login: </strong>{last_login}</p>
                <p><strong>Last IP: </strong>{last_login_ip}</p>
                <p><strong>Contact Number: </strong>{phone}</p>
                <p><strong>Secret Key: </strong>{password}</p>
                <p><strong>Subscrib Status: </strong>{subscribed ? "Premium User": "Guest User(Unsubscribed)"}</p>

            </div>
        </div>
    );
};

export default DetailsInfo;