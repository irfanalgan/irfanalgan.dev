import React from 'react'
import MenuItems from './shared/MenuItems'
import {useOpen, useOpenUpdate} from './context/OpenContext'

function Header() {
    const open = useOpen()
    const handleOpen = useOpenUpdate()
    return (
        <div className= {`${open ? "w-40" : "w-20"} header p-4 pt-8 duration-300 bg-gray-dark fixed top-0 h-screen `}>
            <img
                src={require('../assets/control.png')} 
                alt = ""
                className = {`absolute cursor-pointer rounded-full -right-3.5 top-9 w-8 h-8 border-2 border-deep-orange ${!open && 'rotate-180'}`}
                onClick = {handleOpen}
            />
            <div className = "p-2 items-center ">
                <div className = {` cursor-pointer duration-500 top-9 w-35 h-35 ${!open && "ml-0"}`}>
                    <img src = {require('../../src/assets/foto.png')}
                        className ="rounded-full border-deep-orange border-2"
                        alt =""/>
                </div>
                <div className = {`duration-300 ml-5 pt-4 text-white origin-left  text-xl ${!open && "hidden"} `}>
                    <h1 className = "font-bold ">IRPHAN</h1>
                </div>
                <div className = {`pt-1 ml-3 text-light-orange text-sm duration-300 ${!open && "hidden"}`}>
                    <p>Web</p>
                </div>
            </div>
            <div>  
                <MenuItems data = {open}/>
            </div>
        </div>
    )
}

export default Header