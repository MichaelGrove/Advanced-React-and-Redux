import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it('handles actions of type SAVE_COMMENT', () => {
    const payload = 'New Comment';
    const action = {
        type: SAVE_COMMENT,
        payload
    }

    const newState = commentsReducer([], action);

    expect(newState).toEqual([payload])
})

it('handles action with unknown type', () => {
    const newState = commentsReducer([], {})

    expect(newState).toEqual([])
})
