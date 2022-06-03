import Header from "./components/Header"
import TextZone from "./components/TextZone"
import React,{ useState } from "react"
import Switch from "react-switch";


function App() {
  const [open,setOpen] = useState(() => {
    return true
  });
  const [darkMode,setdarkMode] = useState(() => {
    return true
  });
  
  
  return (
    <div className="flex">
      <aside  className = {`${open ? "w-40" : "w-20"}  p-4 pt-8 duration-300 bg-gray-dark fixed top-0 h-screen `}>
        <img
        src={require('../src/assets/control.png')} 
        alt = ""
        className = {`absolute cursor-pointer rounded-full -right-3.5 top-9 w-8 h-8 border-2 border-deep-orange ${!open && 'rotate-180'}`}
        onClick = {() => setOpen(!open)}
        />
        <div>
          <Header data = {open}/>
        </div>
      </aside >
      <main className = {`${open ? "ml-40" : "ml-20"} ${darkMode ? "bg-gray" : "bg-white"} p-7 duration-300 flex-1`}>
        <div>
          <div className = "items-center">
            <Switch onChange={() => setdarkMode(!darkMode) }/>
          </div>
          <section>
            <div>
              <TextZone data = {darkMode}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;


