import React,{useState} from 'react'
import './styles.module.css'
import { Link} from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [data,setData] = useState({
        email: '',
        password: '',
    })
    const [error,setError] = useState("")
    const handlechange = ({currentTarget: input}) =>{
        setData({...data, [input.name]: input.value})
    }
    const handleSubmit = async(e) =>{
        try {
            const url = "http://localhost:8000/api/v1/users/login"
            const {data: res} = await axios.post(url,data);
            localStorage.setItem("token",res.data)
            window.location = '/'
        } catch (error) {
            if(error.response && 
                error.response.status >= 400 &&
                error.response.status <= 500
            ){
                setError(error.response.data.message)
            }
        }
        e.preventDefault()
    }
    return (
        <div className='container'>
            <div className='form'>
                <div className='left'>
                <form className='signin-container'>
                        <h1>Login to your account</h1>
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
                        {error && <div className="error_message">{error}</div> }
                        <button type='submit' className='green-btn' onChange={handleSubmit}>
                            Sign In
                        </button>
                    </form>
                </div>
                <div className="right">
                <h1>New Here?</h1>
                    <Link to='/login'>
                        <button type='button' className='white-btn'>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
