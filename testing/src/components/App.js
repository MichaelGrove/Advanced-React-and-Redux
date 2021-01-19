import React from 'react'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeAuth } from 'actions/index'

class App extends React.Component {

    renderSignInButton() {
        if (this.props.auth) {
            return (
                <button onClick={() => this.props.changeAuth(false)}>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={() => this.props.changeAuth(true)}>
                    Sign In
                </button>
            )
        }
    }

    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post A Comment</Link>
                </li>
                <li>
                    {this.renderSignInButton()}
                </li>
            </ul>
        )
    }
    
    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox} />
                <Route path="/" exact component={CommentList} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps, { changeAuth })(App)
