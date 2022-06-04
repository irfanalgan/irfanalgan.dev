import React, {useState, useContext}from 'react'

const OpenContext = React.createContext()
const OpenUpdateContext = React.createContext()



export function useOpen(){
    return useContext(OpenContext)
}
export function useOpenUpdate(){
    return useContext(OpenUpdateContext)
}
export function OpenContextProvider({children}) {
    const [open,setOpen] = useState(() => {
        return true
        });
    
    function handleOpen() {
        setOpen(!open)
    }
    
  return (
    <>
    <OpenContext.Provider value = {open}>
        <OpenUpdateContext.Provider value = {handleOpen}>
            {children}
        </OpenUpdateContext.Provider>
    </OpenContext.Provider>
    </>
  )
}

