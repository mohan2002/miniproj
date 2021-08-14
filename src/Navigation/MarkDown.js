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
        <div className={isopen ? "grid grid-rows-4 text-center bg-gray-300 font-semibold  relative  " : 'hidden'}
        
        onClick={toggle}>
              <Link className="p-4 no-underline text-gray-900 hover:text-gray-50" to='/homepage'>Home</Link>
                <Link className="p-4 no-underline text-gray-900 hover:text-gray-50" to='/predict'>Predict</Link>
                <Link className="p-4 no-underline text-gray-900 hover:text-gray-50" to='/schemes'>Schemes</Link>
                <Link className="p-4 no-underline text-gray-900 hover:text-gray-50" to='/basics'>Basic Information</Link>
                <Link className="p-4 no-underline text-gray-900 hover:text-gray-50" to='/calculate'>Calculate</Link>
                <button className="p-2 rounded-lg no-underline bg-red-400 text-gray-900 hover:text-gray-50 mx-10 mb-8" onClick={logoutuser}>Logout</button>

        </div>
    )
}

export default MarkDown
