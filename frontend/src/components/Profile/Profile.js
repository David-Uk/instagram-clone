import React from 'react'

export default function Profile() {
    return (
        <div style={{ maxWidth: '550px', margin: '0px auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10px 0px', borderBottom: '1px solid grey' }}>
                <div>
                    <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" style={{ width: '160px', height: '160px', borderRadius: '80px' }} />
                </div>
                <div>
                    <h4>David Paul</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '108%' }}>
                        <h5>40 posts</h5>
                        <h5>47 following</h5>
                        <h5>47 followers</h5>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className='item' src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <img className='item' src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <img className='item' src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <img className='item' src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <img className='item' src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <img className='item' src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
    )
}
