import React from 'react'
import SidebarOption from './SidebarOption'
import '../Components/Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarOption active text="Home"/>
            <SidebarOption text="Questions"/>
            <SidebarOption text="Profile"/>
        </div>
    )
}

export default Sidebar
