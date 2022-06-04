import Header from "./components/Header"
import TextZone from "./components/TextZone"
import Work from "./components/Work"
import './index.css'
import WorkItems from './components/WorkItems'
import React from "react"
import SwitchButton from "./components/shared/SwitchButton"
import {OpenContextProvider} from "./components/context/OpenContext"
import {DarkContextProvider} from "./components/context/DarkContext"


function App() {
  
  return (
    
    <OpenContextProvider>
      <div className = "App">
        <div className = "">
          <Header/>
        </div>
        <div className = "">
          <DarkContextProvider>
            <SwitchButton/>
            <TextZone/>
            <Work/>
            <WorkItems/>
          </DarkContextProvider>
        </div>
      </div>
    </OpenContextProvider>
    
  );
}

export default App;


