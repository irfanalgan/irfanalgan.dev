import React, {useState, useContext}from 'react'

const DarkModeContext = React.createContext()
const DarkModeUpdateContext = React.createContext()

export function useDark(){
    return useContext(DarkModeContext)
}
export function useDarkUpdate(){
    return useContext(DarkModeUpdateContext)
}

export function DarkContextProvider({children}) {
    const [darkMode,setdarkMode] = useState(() => {
        return true
      });
    function handleDarkMode() {
        setdarkMode(!darkMode)
    }
  return (
    <DarkModeContext.Provider value = {darkMode}>
        <DarkModeUpdateContext.Provider value = {handleDarkMode}>
            {children}
        </DarkModeUpdateContext.Provider>
    </DarkModeContext.Provider>
  )
}

