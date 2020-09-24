import React from 'react'
import '../Components/SidebarOption.css'

function SidebarOption({ text, active, onClick }) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`} onClick={onClick}>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
