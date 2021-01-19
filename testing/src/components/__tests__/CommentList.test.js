import { render } from 'test-utils';
import React from 'react'
import CommentList from 'components/CommentList'

const setup = () => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    }

    return render(<CommentList />, { initialState })
}

let wrapped;
beforeEach(() => {
    wrapped = setup();
})

it('creates one LI per comment', () => {
    const { getAllByRole } = wrapped;

    expect(getAllByRole('listitem').length).toEqual(2);
})

it('shows the text for each comment', () => {
    const { getByText } = wrapped;

    expect(getByText('Comment 1')).toBeTruthy();
    expect(getByText('Comment 2')).toBeTruthy();
})
