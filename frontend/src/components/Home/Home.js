import React from 'react'

export default function Home() {
    return (
        <div classname="home">
            <div className="card home-card">
                <h5>David</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1596016691838-70260f1e21c6?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="card-content">
                    <i className="material-icons">favorite</i>
                    <h6>Title</h6>
                    <p>Post</p>
                    <input type="text" placeholder="Add a comment" />
                </div>
            </div>
        </div>
    )
}
