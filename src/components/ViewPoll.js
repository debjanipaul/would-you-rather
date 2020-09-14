import React from 'react'
import '../styles/ViewPoll.css'

class ViewPoll extends React.Component {
    render() {
        return (
            <div>
                <div id="itemsContainer">
                    <div id="headingDiv">
                        <h4>Jenny Hess asks:</h4>
                    </div>
                    <div id="items">
                        <div class="pic">
                            <img src={require('../assets/user2 copy.png')} alt="user1 pic"></img>
                        </div>
                        <div id='texts'>
                            <h3>Would You Rather...</h3>
                            <form>
                                <label>
                                    <input type="radio" value="option1" checked={true} />
                                     find $50 yourself
                                </label>
                                <label>
                                    <input type="radio" value="option2" />
                                    have your best friend find $500
                                </label>
                            </form>
                            <button id='submit'>Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}
export default ViewPoll;