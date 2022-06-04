import React from 'react'
import '../index.css'
import ContactMe from './shared/ContactMe'
import {useOpen} from './context/OpenContext'
import {useDark} from './context/DarkContext'

function TextZone() {
    const open = useOpen()
    const darkMode = useDark()

    const textList = [
        {letter:'H'},{letter:'i'},{letter:',',gap : true},{letter:'I'},{letter:' a'},{letter:'m'},{letter:' I', first : true},{letter:'r'},{letter:'f'},{letter:'a'},{letter:'n'},{letter:',', gap : true},{letter:'w'},{letter:'e'},{letter:'b'},{letter:' d'},{letter:'e'},{letter:'v'},{letter:'e'},{letter:'l'},{letter:'o'},{letter:'p'},{letter:'e'},{letter:'r'}
        ] 
  return (
     <div className = {`${open ? "ml-40" : "ml-20"} ${darkMode ? "bg-gray" : "bg-white"} p-7 duration-300 h-screen`}> 
        <p className = "noselect text-deep-orange font-bold font-lucida text-sm">{"<html> "}</p> 
        <p className = "htmlComp noselect secondComp">{"<body>"}</p>
        <p className = "htmlComp noselect">{"<h1>"}</p>
        <h1 className = "pl-10">
            {textList.map((text,index) => (
                <span key={index} className={`textZone noselect font-bold pr-0.5 hover:text-deep-orange duration-300 text-7xl font-adelia ${text.first ? "text-8xl text-deep-orange font-mono": !darkMode ? "text-black" : "text-white" }`}>
                {text.letter}
                {text.gap ? <br /> : null}
              </span>
            ))} 
        </h1>
        <p className = "htmlComp noselect">{"</h1>"}</p>
        <p className = "htmlComp noselect">{"<p>"}</p>
        <p className= {`textZoneChild ${!darkMode ? "text-black": "text-gray-light" } text-lg pl-8 duration-300`}>Front End Developer</p>
        <p className = "htmlComp noselect">{"</p>"}</p>
        <ContactMe />
    </div>
  )
}

export default TextZone
