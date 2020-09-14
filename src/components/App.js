import React from 'react'
import { Link, Route, Switch } from "react-router-dom";
import SignIn from './SignIn'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import ViewPoll from './ViewPoll'
import PollResults from './PollResults'
import Error from './Error'

function App() {
    return (
        <div>
            <Route exact={true} path="/" component={SignIn} />
            <Route path="/home" component={Home} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/viewPoll" component={ViewPoll} />
            <Route path="/pollResults" component={PollResults} />
            <Route path="/Error" component={Error} />
        </div>
    );
}

export default App;