import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='my-card'>
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input type="email" name="" id="" placeholder="Email" />
                <input type="password" name="" id="" placeholder="Password" />
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
                    Login
                </button>
                <h6>
                    <Link to="/signup">Dont have an account ?</Link>
                </h6>
                <h6>
                    <Link to="/reset">Forgot password ?</Link>
                </h6>
            </div>
        </div>
    )
}
