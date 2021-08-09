import React from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from '../Context/AuthContext'
import {useHistory} from 'react-router-dom'

function MainNavigation({toggle}) {

    const {logout} = useAuth()
    const history = useHistory()

    async function logoutuser(){
        try{
            await logout()
            history.push('/')
        }
        catch{
            alert("Failed to Logout try again!!")
        }
    }
    return (
        <nav className="flex justify-between items-center h-16 bg-gray-500 text-black relative shadow-lg " role="navigation">
        
        <div>
            <h1 className="text-xl md:text-2xl lg:text-4xl text-black font-bold animate-pulse pl-6">LOAN HELPER
            </h1>
        </div>

          <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
            <div className="pr-8 md:block hidden font-semibold text-xl ">
                <Link className="p-4 no-underline text-gray-900 hover:text-gray-50">Home</Link>
                <Link className="p-4 no-underline text-gray-900 hover:text-gray-50">Predict</Link>
                <Link className="p-4 no-underline text-gray-900 hover:text-gray-50">Schemes</Link>
                <Link className="p-4 no-underline text-gray-900 hover:text-gray-50">Basic Information</Link>
                <Link className="p-4 no-underline text-gray-900 hover:text-gray-50">Calculate</Link>
                <button className="p-2 rounded-lg pl-10  no-underline bg-red-400 text-gray-900 hover:text-gray-50" onClick={logoutuser}>Logout</button>
                
            </div>

        </nav>
    )
}

export default MainNavigation
