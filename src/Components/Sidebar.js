import React from 'react'
import SidebarOption from './SidebarOption'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarOption text="Profile"/>
            <SidebarOption text="Questions"/>
        </div>
    )
}

export default Sidebar
