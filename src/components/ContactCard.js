import React from 'react'

const ContactCard = (props) => {
  return (
    <div>
      <div className='item'>
            <div className='content'>
            <div className='header'>{contact.name}</div>  
            <div >{contact.email}</div>  
            </div>
            <i className='trash alternative outline icon'style={{color:"red",marginTop:"7px"}}></i>
            </div>
    </div>
  )
}

export default ContactCard
