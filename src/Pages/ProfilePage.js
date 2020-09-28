import React from 'react'
import Profile from '../Components/Profile/Profile'
import Sidebar from "../Components/Sidebar/Sidebar";
import '../Pages/ProfilePage.css'

function ProfilePage() {
    return (
        <div className="app">
            <Sidebar />
            <Profile />
        </div>
    )
}

export default ProfilePage
