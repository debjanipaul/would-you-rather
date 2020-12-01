import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './SignIn'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Error from './Error'
import QuestionPage from './QuestionPage'

class App extends React.Component {

    componentDidMount() {
        this.props.handleInitialData();
    }
    render() {
        const { authUser } = this.props;
        return (
            <Router>
                {authUser === null ? (
                    <Route
                        render={() => (
                            <SignIn />
                        )}
                    />
                ) : (
                        <Switch>
                            <Route exact={true} path="/" component={Home} />
                            <Route path="/question/:id" component={QuestionPage} />
                            <Route path="/add" component={NewQuestion} />
                            <Route path="/leaderboard" component={LeaderBoard} />
                            <Route component={Error} />
                        </Switch>

                    )}
            </Router>
        );

    }

}

function mapStateToProps({ authUser }) {
    return {
        authUser
    };
}

export default connect(
    mapStateToProps,
    { handleInitialData }
)(App);