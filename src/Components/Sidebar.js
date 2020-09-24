import React from 'react'
import SidebarOption from './SidebarOption'
import '../Components/Sidebar.css'
import { logout } from "../Api/AuthCalls";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarOption active text="Home"/>
            <SidebarOption text="Questions"/>
            <SidebarOption text="Profile"/>
            <SidebarOption onClick={()=> logout()} text="Logout"/>
        </div>
    )
}

export default Sidebar
