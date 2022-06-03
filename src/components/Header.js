import React from 'react'
import MenuItems from './shared/MenuItems'

function Header(props) {
   
    return (
        <div className= "header">
            <div className = "p-2 items-center ">
                <div className = {` cursor-pointer duration-500 top-9 w-35 h-35 ${!props.data && "ml-0"}`}>
                    <img src = {require('../../src/assets/foto.png')}
                        className ="rounded-full border-deep-orange border-2"
                        alt =""/>
                </div>
                <div className = {`duration-300 ml-5 pt-4 text-white origin-left  text-xl ${!props.data && "hidden"} `}>
                    <h1 className = "font-bold ">IRPHAN</h1>
                </div>
                <div className = {`pt-1 ml-3 text-light-orange text-sm duration-300 ${!props.data && "hidden"}`}>
                    <p>Web</p>
                </div>
            </div>
            <div>  
                <MenuItems data = {props.data}/>
            </div>
        </div>
    )
}

export default Header