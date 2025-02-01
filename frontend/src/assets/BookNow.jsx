import axios from 'axios'
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import "./BookNow.css";

const Create = () => {
const [Name,setName] = useState('')
const [Email_id,setEmail] = useState('')
const [Contact_no,setContact] = useState('')
const [Destination,setDestination] = useState('')



const sendData = async(e) =>{
e.preventDefault()

await axios.post('http://localhost:5000/api/',{Name,Email_id,Contact_no,Destination })

setName("")
setEmail("")
setContact("")
setDestination("")

alert('Your Booking is Succesfull👍 Thank you🙏')

}

const navigate = useNavigate()

  return (
    <div className="form-container" >
      
        <form onSubmit={sendData}  className="form">
            <label>Name :</label>
            <input value={Name} type='text' placeholder='Enter Your Name here .....' onChange={(e)=>{setName(e.target.value)}} /><br></br>
            <label>Email-ID :</label>
            <input value={Email_id} type='text' placeholder='Enter Your Email-ID here .....' onChange={(e)=>{setEmail(e.target.value)}} /><br></br>
            <label>Contact Number :</label>
            <input value={Contact_no} type='text' placeholder='Enter Your Contact No. here .....' onChange={(e)=>{setContact(e.target.value)}} /><br></br>
            <label>Destination :</label>
            <input value={Destination} type='text' placeholder='Enter Your Destination here .....' onChange={(e)=>{setDestination(e.target.value)}} /><br></br>
            
            <input type='submit' value={"Add 😎"} />
        </form>
    </div>
  )
}

export default Create