import { useState } from "react"
import { validEmail } from "../utils/validate"
import './contact.css'

export default function Contact() {
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [name,setName] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (error === ''){
            setEmail('')
            setMessage('')
            setName('')
        }
    }

    const onChangeHandler = (e) => {
        const {name,value} = e.target
        console.log(name,value)
        switch(name){
            case 'name':
                setName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'message':
                setMessage(value)
                break
        }
    }
    
    const onFocusHandler = (e) => {
        switch(e.target.name){
            case 'name':
                error === 'Please Enter Your Name' ? setError('') : null
                break
            case 'email':
                error === 'Please Enter A Valid Email' ? setError('') : null
                break
            case 'message':
                error === 'Please Enter A Message' ? setError('') : null
                break
        }
    }
    const validate = (e) => {
        switch(e.target.name){
            case 'name':
                !name.length ? setError('Please Enter Your Name') : setError('')
                break
            case 'email':
                validEmail(email)===false ? setError('Please Enter A Valid Email') : setError('')
                break
            case 'message':
                !message.length ? setError('Please Enter A Message') : setError('')
                break
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Name">Name:</label>
            <input
                value={name} 
                name="name"
                id="Name"
                type="text"
                onFocus={onFocusHandler}
                onChange={onChangeHandler}
                onBlur={validate}
            />
            <label htmlFor="Email">Email:</label>
            <input
                value={email} 
                name="email"
                id="Email"
                type="email"
                onFocus={onFocusHandler}
                onChange={onChangeHandler}
                onBlur={validate}
             />
             <label htmlFor="Message">Message:</label>
            <textarea
                value={message} 
                name="message"
                onFocus={onFocusHandler}
                onChange={onChangeHandler}
                onBlur={validate}
                id="Message"
                >

            </textarea>
            {error.length ? (<p>{error}</p>) : null}
            <button type="submit" id="submit">Submit</button>
        </form>
    )
} 