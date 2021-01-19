import React from 'react'
import { connect } from 'react-redux'
import { saveComment, fetchComments } from 'actions/index'
import requireAuth from 'components/requireAuth'

class CommentBox extends React.Component {
    state = { comment: '' }

    handleChange = ev => {
        this.setState({
            comment: ev.target.value,
        })
    }

    handleSubmit = async ev => {
        ev.preventDefault()
        this.props.saveComment(this.state.comment)
        this.setState({ comment: '' })
    }

    render() {
        return (
            <div>
                <form
                    data-testid="comment-box"
                    onSubmit={this.handleSubmit}
                >
                    <h4>Add a comment</h4>
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.comment}
                        data-testid="comment-box__textarea"
                    />
                    <div>
                        <button
                            data-testid="comment-box__submit"
                        >
                            Submit Comment
                        </button>
                    </div>
                </form>
                <button
                    onClick={this.props.fetchComments}
                    data-testid="comment-box__fetch"
                >
                    Fetch Comments
                </button>
            </div>
        )
    }
}


export default connect(null, { saveComment, fetchComments })(requireAuth(CommentBox))
