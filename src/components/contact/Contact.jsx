import { useState } from "react";
import {toast} from 'react-toastify';

import "../../style/Contact.css"

function Contact(){

    let[contact, setContact] = useState({
        name: "",
        email: "",
        message: "",
    });

    const contactHandler = (e)=>{
        setContact((curr)=>({
            ...curr,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        setTimeout(()=>{
            setContact({
                name: "",
                email: "",
                message: "",
            })
            toast.success("Message Recieved")
        },1000)
    }
    return(
        <div className="contact-container" id="contact">
            <div className="heading accent" >CONTACT</div>
            <form onSubmit={submitHandler}>
                <input type="text" name="name" id="name" value={contact.name} onChange={contactHandler} placeholder="Enter Your Name" required />
                <input type="text" name="email" id="email" value={contact.email} onChange={contactHandler} placeholder="Enter Your Email" required />
                <input type="text" name="message" id="message" value={contact.message} onChange={contactHandler} placeholder="Enter Your Message" required />
                <button type="submit" className="submit">SEND</button>
            </form>
        </div>
    )
}

export default Contact;