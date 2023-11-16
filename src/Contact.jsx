import React, { useState } from "react";

const Contact = () => {
    const [data, updated] = useState({
        name : '',
        phone : '',
        email : '',
        msg : ''
    });

    const inputFields = (e) => {
        const {name, value} = e.target;
        updated((prev) => {
            return{
                ...prev,
                [name] : value
            }
        })
    }

    const submitData = (e) => {
        e.preventDefault();
        alert(`My name is ${data.name}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`);
        updated({
            name : '',
            phone : '',
            email : '',
            msg : ''
        })
    }

    return(
        <>
        <h5 className="container mt-2 mb-4 text-center">Contact Us</h5>
        <div className="container">
        <div className="form_data">
           <form onSubmit={submitData}>
           <label for='name' className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="name" name="name" value={data.name} onChange={inputFields} id="name" required />
            <label for='phone' className="form-label">Phone</label>
            <input type="text" className="form-control" placeholder="mobile number" name="phone" value={data.phone} onChange={inputFields} id="phone" required />
            <label for='email' className="form-label">Email Address</label>
            <input type="email" className="form-control" placeholder="name@example.com" name="email" value={data.email} onChange={inputFields} id="email" required />
            <label for='msg' className="form-label">Message</label>
            <textarea className="form-control" name="msg" value={data.msg} onChange={inputFields} id="msg" rows='3' required></textarea>
            <button type="submit" class="btn btn-outline-primary">Submit form</button>
           </form>
        </div>
        </div>
        </>
    )
}

export default Contact;