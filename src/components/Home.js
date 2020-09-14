import React from 'react'
import '../styles/Home.css'
import QuestionsDisplay from './QuestionsDisplay'
import '../styles/QuestionsDisplay.css'
import Nav from './Nav'
import '../styles/Nav.css'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div id="questionContainer">
                    <div id="buttonContainer">
                        <button className="questionsDiv active">Unanswered Questions</button>
                        <button className="questionsDiv">Answered Questions</button>
                    </div>
                    <QuestionsDisplay />
                </div>
            </div>
        )
    }
}
export default Home;