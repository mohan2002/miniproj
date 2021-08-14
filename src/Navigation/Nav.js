import React,{useState,useEffect} from 'react'
import MainNavigation from './MainNavigation'
import MarkDown from './MarkDown'

function Nav() {
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

export default Nav
