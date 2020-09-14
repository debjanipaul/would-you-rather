import React from 'react'
import '../styles/LeaderBoard.css'
import Nav from './Nav'
import '../styles/Nav.css'

class LeaderBoard extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div id="itemsContainer1">
                    <div class="pic2">
                        <img src={require('../assets/user1 copy.png')} alt="user1 pic"></img>
                    </div>
                    <div id='midSection'>
                        <h3>Jenny Hess</h3>
                        <div class="QuestPoints">
                            <p className="QuestPointsItems">Answered Questions</p>
                            <p className="QuestPointsItems1">7</p>
                        </div>
                        <div class="QuestPoints">
                            <p className="QuestPointsItems">Created Questions</p>
                            <p className="QuestPointsItems1">3</p>
                        </div>
                    </div>
                    <div id="scoreDiv">
                        <h4>Score</h4>
                        <p>10</p>
                    </div>
                </div>

                <div id="itemsContainer1">
                    <div class="pic2">
                        <img src={require('../assets/user2 copy.png')} alt="user1 pic"></img>
                    </div>
                    <div id='midSection'>
                        <h3>Eliot Fu</h3>
                        <div class="QuestPoints">
                            <p className="QuestPointsItems">Answered Questions</p>
                            <p className="QuestPointsItems1">6</p>
                        </div>
                        <div class="QuestPoints">
                            <p className="QuestPointsItems">Created Questions</p>
                            <p className="QuestPointsItems1">3</p>
                        </div>
                    </div>
                    <div id="scoreDiv">
                        <h4>Score</h4>
                        <p>9</p>
                    </div>
                </div>

                <div id="itemsContainer1">
                    <div class="pic2">
                        <img src={require('../assets/user3 copy.png')} alt="user1 pic"></img>
                    </div>
                    <div id='midSection'>
                        <h3>Stevie Feliciano</h3>
                        <div class="QuestPoints">
                            <p className="QuestPointsItems">Answered Questions</p>
                            <p className="QuestPointsItems1">5</p>
                        </div>
                        <div class="QuestPoints">
                            <p className="QuestPointsItems">Created Questions</p>
                            <p className="QuestPointsItems1">2</p>
                        </div>
                    </div>
                    <div id="scoreDiv">
                        <h4>Score</h4>
                        <p>7</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default LeaderBoard;