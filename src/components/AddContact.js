import React from 'react'

class AddContact extends React.Component{
  state={
    name:"",
    email:"",
  }
  render(){
    return(
    <div className='Ui main'>
      <h2>Add Contact</h2>
      <form className='ui form'>
        <div className='field'>
            <label>Name</label>
            <input type="text" name='name' placeholder='Name' 
            value={this.state.name}
            onChange={(e)=>this.setState({name:e.target.value})}/>

            <div className='field'>
            <label>Email</label>
            <input type="text" name='name' placeholder='Email'/>
            </div>
        </div>
        <button className='ui button red'>Add </button>
         </form>
    </div>
  )
    }
}

export default AddContact
