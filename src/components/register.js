import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()

    const [input, setInput] = useState({
        fname: " ", lname: " ", contact: " "
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = {
            fname: input.fname,
            lname: input.lname,
            contact: input.contact
        }
        axios.post('http://localhost:5000/api/register', newData)
        navigate('/StudentList')
        window.location.reload(false)
    };

    const handleInput = (e) => {
        const{name, value} = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    return (
        <div>
            <div className='register'>

            <form className='form'>
                <h2>Todo List</h2>
                <label htmlFor='name'>First name :</label>
                <input className='inputfield' type='text' name='fname'  placeholder='enter first name'
                value={input.fname} onChange={handleInput}/><br/>

                <label htmlFor='name'>Last name :</label>
                <input className='inputfield' type='text' name='lname'  placeholder='enter last name'
                value={input.lname} onChange={handleInput}/><br/>

                <label htmlFor='name'>Contact :</label>
                <input className='inputfield' type='text' name='contact'  placeholder='enter contact'
                value={input.contact} onChange={handleInput}/><br/>

                <button type="button" className="btn btn-success" onClick={handleSubmit}>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Register
