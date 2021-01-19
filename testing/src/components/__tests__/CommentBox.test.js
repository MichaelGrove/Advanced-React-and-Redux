import { render, fireEvent } from 'test-utils';
import React from 'react'
import CommentBox from 'components/CommentBox'

const setup = () => {
    return render(<CommentBox />)
}

it('has a textarea and a button', () => {
    const { getByTestId } = setup();

    expect(getByTestId('comment-box__textarea')).toBeTruthy();
    expect(getByTestId('comment-box__submit')).toBeTruthy();
    expect(getByTestId('comment-box__fetch')).toBeTruthy();
})

describe('the textarea', () => {
    let getByTestId;
    let textarea;
    let value = 'Hello, world!'

    beforeEach(() => {    
        getByTestId = setup().getByTestId;
        textarea = getByTestId('comment-box__textarea')
        fireEvent.change(textarea, { target: { value } });
    })
    
    it('has a textarea that users can type in', () => {
        fireEvent.change(textarea, { target: { value } });
        expect(textarea.value).toBe(value);
    })

    it('empties textarea after submit', () => {
        const submit = getByTestId('comment-box__submit')
        fireEvent.click(submit)
        expect(textarea.value).toBe('')
    })
})