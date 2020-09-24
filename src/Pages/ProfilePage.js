import React from 'react'
import Profile from '../Components/Profile'
import Sidebar from '../Components/Sidebar'
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
