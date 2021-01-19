import { FETCH_COMMENTS, SAVE_COMMENT } from 'actions/types'

const commentsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case SAVE_COMMENT:
            return [...state, payload]
        case FETCH_COMMENTS:
            return [
                ...state, 
                ...payload.data.map(comment => comment.name)
            ]
        default:
            return state;
    }
}

export default commentsReducer
