import React from 'react'
import moxios from 'moxios'
import { render, fireEvent } from 'test-utils';
import App from 'components/App'

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            { name: 'Fetched #1' },
            { name: 'Fetched #2' },
        ]
    });
})

afterEach(() => {
    moxios.uninstall();
})

it('can fetch a list of comments and display them', (done) => {
    const { getByTestId, getAllByRole } = render(<App />)

    const button = getByTestId('comment-box__fetch');
    fireEvent.click(button)

    moxios.wait(() => {
        expect(getAllByRole('listitem').length).toEqual(2)
        done();        
    })
})
