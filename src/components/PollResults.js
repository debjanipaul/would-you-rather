import React from 'react'
import '../styles/PollResults.css'
import { Progress } from 'semantic-ui-react'

class PollResults extends React.Component {
    render() {
        return (
            <div>
                <div id="itemsContainer">
                    <div id="headingDiv">
                        <h4>Added by Jenny Hess</h4>
                    </div>
                    <div id="items">
                        <div class="pic">
                            <img src={require('../assets/user1 large.png')} alt="user1 pic"></img>
                        </div>
                        <div id='texts'>
                            <h3>Results:</h3>
                            <div id="result1Container">
                                <h4>Would you rather find $50 yourself</h4>
                                <Progress percent={44} progress label='2 out of 3 items' />
                            </div>
                            <div id="result1Container1">
                                <h4>Would you rather have your best friend find $500</h4>
                                <Progress percent={33.3} progress label='1 out of 3 items' />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }

}
export default PollResults;