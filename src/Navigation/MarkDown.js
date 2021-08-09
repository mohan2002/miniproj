import React from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../Context/AuthContext'
import {useHistory} from 'react-router-dom'

function MarkDown({isopen, toggle}) 

{
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
        <div className={isopen ? "grid grid-rows-4 text-center bg-gray-300 font-semibold w-1/2 relative left-96 " : 'hidden'}
        
        onClick={toggle}>
              <Link className="p-4 no-underline text-gray-900 hover:text-gray-50">Home</Link>
                <Link className="p-4 no-underline text-gray-900 hover:text-gray-50">Predict</Link>
                <Link className="p-4 no-underline text-gray-900 hover:text-gray-50">Schemes</Link>
                <Link className="p-4 no-underline text-gray-900 hover:text-gray-50">Basic Information</Link>
                <Link className="p-4 no-underline text-gray-900 hover:text-gray-50">Calculate</Link>
                <button className="p-2 rounded-lg no-underline bg-red-400 text-gray-900 hover:text-gray-50 w-1/2 ml-24 mb-8" onClick={logoutuser}>Logout</button>

        </div>
    )
}

export default MarkDown
