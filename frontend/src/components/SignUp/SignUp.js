import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div className='my-card'>
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input type="text" name="" id="" placeholder="Name" />
                <input type="email" name="" id="" placeholder="Email" />
                <input type="password" name="" id="" placeholder="Password" />
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
                    Signup
                </button>
                <h6>
                    <Link to='/signin'>Already have an account?</Link>
                </h6>

            </div>
        </div>
    )
}
