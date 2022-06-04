import React from 'react'
import useHover from "@react-hook/hover";
import { useRef } from 'react'

function ContactMe() {
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)
    return (
        <div className = "pt-5"> 
            <button ref = {hoverRef} className = {`contactButton text-white text-xl items-center h-12 w-60 cursor-pointer border-deep-orange border-2 font-mono ${isHover ? "bg-deep-orange text-gray " : "text-deep-orange"} duration-300 `}>
                <span>Contact Me!</span>
            </button>
        </div>
    )
}

export default ContactMe