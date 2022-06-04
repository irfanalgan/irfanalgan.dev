import React from 'react'
import useHover from "@react-hook/hover";
import { useRef } from 'react'
import {useOpen} from './context/OpenContext'
import {useDark} from './context/DarkContext'


function WorkItems() {
    const open = useOpen()
    const darkMode = useDark()
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)
  return (
    <div className = {`${darkMode ? "bg-gray" : "bg-white"} duration-300`}>
      
      <p className = "htmlComp noselect">{"<section>"}</p>
      
      <p className = "htmlComp noselect">{"</section>"}</p>
    </div>
  )
}

export default WorkItems

/*
      <div className="container mx-auto"> 
        
        <section className="pt-8 px-4">
          <div className="flex flex-wrap -mx-4 ">
              <div className="md:w-1/5 px-5 mb-8 ">
                <img ref = {hoverRef} className={`${isHover ? "opacity-0.3 " : "opacity-1"} rounded shadow-md `} src={require('../assets/foto.png')} alt=""/>
                <div className="bottom-0 right-0 p-4 items-center ">
                  <button  ref = {hoverRef} className = {`${isHover ? "opacity-1 border-1 rounded-full border-deep-orange cursor-pointer" : "opacity-0"} rounded shadow-md `}>
                      <span className = "">
                        View Project
                      </span>
                  </button>
                </div>
              </div>
            <div className="md:w-1/5 px-5 mb-8">
              <img className="rounded shadow-md" src={require('../assets/foto.png')} alt=""/>
            </div>
            <div className="md:w-1/5 px-5 mb-8">
              <img className="rounded shadow-md" src={require('../assets/foto.png')}alt=""/>
            </div>
            <div className="md:w-1/5 px-5 mb-8">
              <img className="rounded shadow-md" src={require('../assets/foto.png')} alt=""/>
            </div>
            <div className="md:w-1/5 px-5 mb-8">
              <img className="rounded shadow-md" src={require('../assets/foto.png')} alt=""/>
            </div>
            <div className="md:w-1/5 px-5 mb-8">
              <img className="rounded shadow-md" src={require('../assets/foto.png')} alt=""/>
            </div>
          </div>
        </section>
                      
      </div>
      */