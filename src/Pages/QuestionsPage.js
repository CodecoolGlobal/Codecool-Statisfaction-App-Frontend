import React from 'react'
import Sidebar from "../Components/Sidebar/Sidebar";
import QuestionFeed from "../Components/QuestionFeed"
import "../Pages/QuestionsPage.css"

function QuestionsPage() {
    return (
        <div className="app">
            <Sidebar />
            <QuestionFeed />
        </div>
    )
}

export default QuestionsPage
