import React from 'react'
import user from '../images/user.jpeg'
const ContactCard = (props) => {
    const{id, name, email}=props.contact;
  return (
    <div>
      <div className='item'>
        <img className='ui avator image'src={user} alt='user'/>
            <div className='content'>
            <div className='header'>{name}</div>  
            <div >{email}</div>  
            </div>
            <i className='trash alternative outline icon'style={{color:"red",marginTop:"7px"}}></i>
            </div>
    </div>
  )
}

export default ContactCard
/* 28.48 */