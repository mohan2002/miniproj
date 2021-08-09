import React,{useEffect, useState} from 'react'
// import { Nav } from 'react-bootstrap'
import MainNavigation from '../Navigation/MainNavigation'
import MarkDown from '../Navigation/MarkDown'
// import bck1 from '../Images/bck2.jpeg'

function Homepage() {
    const [isopen,setIsOpen] = useState(false)

    const toggle=()=>{
    setIsOpen(!isopen)
    }

    useEffect(()=>{
        const hideMenu = () => {
            if(window.innerWidth > 768 && isopen){
                setIsOpen(false)
                
            }
        }
        window.addEventListener('resize',hideMenu)

        return()=>{
            window.removeEventListener('resize',hideMenu)
        }
    })
    return (
        <div>
            <MainNavigation toggle={toggle}/>
            <MarkDown isopen={isopen} toggle={toggle}/>
        </div>
    )
}

export default Homepage
