import React from 'react'
import '../Components/SidebarOption.css'

function SidebarOption({ text, active }) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
