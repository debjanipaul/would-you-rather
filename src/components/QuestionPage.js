import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewPoll from './ViewPoll';
import PollResults from './PollResults';

class QuestionPage extends Component {
    render() {
        const { authUserAnswers, match } = this.props;
        const id = match.params.id;
        console.log('params', id)
        const answered = authUserAnswers.hasOwnProperty(id) ? true : false;

        return (
            <div>
                {answered ? <PollResults id={id} /> : <ViewPoll id={id} />}
            </div>
        );
    }
}

function mapStateToProps({ authUser, users }) {
    const authUserAnswers = users[authUser].answers;

    return {
        authUserAnswers
    };
}

export default connect(mapStateToProps)(QuestionPage);