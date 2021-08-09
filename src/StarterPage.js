import React from 'react'
import { Link } from 'react-router-dom'

function StarterPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
           <h1 className="font-extrabold text-7xl text-blue-900">LOAN HELPER</h1>
            <Link className="mt-10 p-3 w-64 rounded-full no-underline text-indigo-50 text-center bg-yellow-400 font-extrabold text-2xl" to='/login'>Login</Link>
            
            <i className="far fa-handshake text-5xl mt-10"></i>
        </div>
    )
}

export default StarterPage
