import React,{useState} from 'react'
import './styles.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function index() {
    const [data,setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })
    const handlechange = ({currentTarget: input}) =>{
        setData({...data, [input.name]: input.value})
    }
    const handleSubmit = async(e) =>{
        try {
            
        } catch (error) {
            
        }
        e.preventDefault()
    }
    return (
        <div className='container'>
            <div className='form'>
                <div className='left'>
                    <h1>Welcom Back</h1>
                    <Link to='/login'>
                        <button type='button' className='white_btn'>
                            SignIn
                        </button>
                    </Link>
                </div>
                <div className="right">
                    <form className='signin-container'>
                        <h1>Create Account</h1>
                        <input
                            type='text'
                            placeholder='first name'
                            name='first name'
                            onClick={handlechange}
                            value={data.firstname}
                            required
                            className='input-name'
                        />
                        <input
                            type='text'
                            placeholder='last name'
                            name='last name'
                            onClick={handlechange}
                            value={data.lastname}
                            required
                            className='input-name'
                        />
                        <input
                            type='text'
                            placeholder='email'
                            name='email'
                            onClick={handlechange}
                            value={data.email}
                            required
                            className='input-name'
                        />
                        <input
                            type='text'
                            placeholder='password'
                            name='password'
                            onClick={handlechange}
                            value={data.password}
                            required
                            className='input-name'
                        />
                        <button type='submit' className='green-btn' onChange={handleSubmit}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default index
