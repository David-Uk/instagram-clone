import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <div class="nav-wrapper white">
                <Link to="/" class="brand-logo">Instagram</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/create">Create Post</Link></li>
                </ul>
            </div>
        </nav>
    )
}
