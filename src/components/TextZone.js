import React from 'react'
import '../index.css'
import ContactMe from './shared/ContactMe'

function TextZone(props) {

    const textList = [
        {letter:'H'},{letter:'i'},{letter:',',gap : true},{letter:'I'},{letter:' a'},{letter:'m'},{letter:' I', first : true},{letter:'r'},{letter:'f'},{letter:'a'},{letter:'n'},{letter:',', gap : true},{letter:'w'},{letter:'e'},{letter:'b'},{letter:' d'},{letter:'e'},{letter:'v'},{letter:'e'},{letter:'l'},{letter:'o'},{letter:'p'},{letter:'e'},{letter:'r'}
        ] 
  return (
     <> 
        <p className = "htmlComp noselect">{"<html> "}</p> 
        <p className = "htmlComp noselect">{"<body>"}</p>
        <p className = "htmlComp noselect">{"<h1>"}</p>
        <h1 className = "pl-8">
            {textList.map((text,index) => (
                <span key={index} className={`textZone noselect font-bold pr-0.5 hover:text-deep-orange duration-300 text-7xl font-adelia ${text.first ? "text-8xl text-deep-orange font-mono": !props.data ? "text-black" : "text-white" }`}>
                {text.letter}
                {text.gap ? <br /> : null}
              </span>
            ))} 
        </h1>
        <p className = "htmlComp noselect">{"</h1>"}</p>
        <p className = "htmlComp noselect">{"<p>"}</p>
        <p className= {`textZoneChild ${!props.data ? "text-black": "text-gray-light" } text-lg pl-8 duration-300`}>Front End Developer</p>
        <p className = "htmlComp noselect">{"</p>"}</p>
        <ContactMe />
    </>
  )
}

export default TextZone
