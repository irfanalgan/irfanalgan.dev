import React from 'react'
import {useOpen} from './context/OpenContext'
import {useDark} from './context/DarkContext'

function Work() {
    const open = useOpen()
    const darkMode = useDark()
    const textList = [
        {letter:'M'},{letter:'y'},{letter:' P'},{letter:'o'},{letter:'r'},{letter:'t'},{letter:'f'},{letter:'o'},{letter:'l'},{letter:'i'},{letter:'o'}
    ]
        
  return (
       
        <div className = {`${open ? "ml-40" : "ml-20"} ${darkMode ? "bg-gray" : "bg-white"} p-7 duration-300`}>
            <p className = "htmlComp noselect">{"<h2>"}</p>
            <h2 className = "pl-10">
            {textList.map((text,index) => (
                    <span key={index} 
                    className={`${!darkMode ? "text-black" : "text-white"} noselect font-bold pr-0.5 hover:text-deep-orange duration-300 text-5xl font-adelia`}>
                    {text.letter}
                </span>
                ))} 
            </h2>
            <p className = "htmlComp noselect">{"</h2>"}</p>
            <p className = "htmlComp noselect">{"<p>"}</p>
            <p className = {`${!darkMode ? "text-black" : "text-white"} pl-10`}>
                A small gallery of recent projects chosen by me.
                I've done them all together with amazing people from companies
                <br />
                around the globe.
                It's only a drop in the ocean compared to the entire list.
            </p>
            <p className = "htmlComp noselect">{"</p>"}</p>
            
        </div>
  )
}

export default Work