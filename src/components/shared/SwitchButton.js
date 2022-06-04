import React from 'react'
import Switch from "react-switch";
import {useDark, useDarkUpdate} from '../context/DarkContext'
import {useOpen} from '../context/OpenContext'

function SwitchButton() {
    const darkMode = useDark()
    const handleDarkMode = useDarkUpdate() 
    const open = useOpen()
    
  return (
    <div className = {` ${darkMode ? "bg-gray" : "bg-white"} duration-300`}>
        <Switch onChange={() => handleDarkMode() }/>
    </div>
  )
}

export default SwitchButton