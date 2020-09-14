import React from 'react'
import '../styles/QuestionsDisplay.css'

class QuestionsDisplay extends React.Component {
    render() {
        return (
            <div>
                <div id="questionsContainer">
                    <div id='name'>
                        <h4>Jenny Hess asks:</h4>
                    </div>
                    <div id="picAskContainer">
                        <div class="pic1">
                            <img src={require('../assets/user1 copy.png')} alt="user1 pic"></img>
                        </div>
                        <div id="questionDiv">
                            <h4>Would You Rather</h4>
                            <p>Drink Tea...</p>
                            <button>View Poll</button>
                        </div>

                    </div>
                </div>

                <div id="questionsContainer">
                    <div id='name'>
                        <h4>Eliot Fu asks:</h4>
                    </div>
                    <div id="picAskContainer">
                        <div class="pic1">
                            <img src={require('../assets/user2 copy.png')} alt="user2 pic"></img>
                        </div>
                        <div id="questionDiv">
                            <h4>Would You Rather</h4>
                            <p>Go to movie...</p>
                            <button>View Poll</button>
                        </div>

                    </div>
                </div>

                <div id="questionsContainer">
                    <div id='name'>
                        <h4>Jenny Hess asks:</h4>
                    </div>
                    <div id="picAskContainer">
                        <div class="pic1">
                            <img src={require('../assets/user3 copy.png')} alt="user3 pic"></img>
                        </div>
                        <div id="questionDiv">
                            <h4>Would You Rather</h4>
                            <p>Climb a mountain...</p>
                            <button>View Poll</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionsDisplay;