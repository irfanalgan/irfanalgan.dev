import React from 'react'


function MenuItems(props) {
    const menus = [
        {title: "About", src:"About", gap: true},
        {title: "Skills", src:"mySkills"},
        {title: "Work", src:"project"},
        {title: "Contact", src:"contact",gap : true},
        {title: "Blog", src:"blog"},
    ]
    return (
        <>
            <ul>
                {menus.map((menu,index) => (
                    <li
                        key = {index}
                        className = {`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 text-gray-light font-bold rounded-md ${menu.gap ? "mt-8": "mt-1"} `}>
                        <img src = {require(`../../../src/assets/${menu.src}.png`)}
                        className = {`menuImage cursor-pointer duration-500 top-9 w-8 h-8`}
                        alt =""/>
                        <span className = {`${!props.data && "hidden"} menuTitle hover:text-deep-orange origin-left duration-200`}>{menu.title}</span>
                       
                    </li>
                ))}
            </ul>
            <div className = {`${!props.data ? "-ml-1" : "ml-8"} pt-8 duration-300`}>
                <div className="flex">
                    <a href = "https://www.linkedin.com/in/irfankaanalgan/">
                    <img src = {require(`../../../src/assets/linkedin.png`)}
                        className = {`cursor-pointer duration-500 top-9 w-8 h-8`}
                        alt =""/
                        >
                    </a>
                    <a href = "https://github.com/irfanalgan">
                    <img src = {require(`../../../src/assets/github.png`)}
                        className = {`cursor-pointer duration-500 top-9  w-8 h-8`}
                        alt =""/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default MenuItems

