import { render } from 'test-utils'
import App from 'components/App'

let getByTestId;

beforeEach(() => {
    getByTestId = render(<App />).getByTestId;
})

it('shows a comment box', () => {
    expect(getByTestId('comment-box')).toBeTruthy();
})

it ('shows a comment list', () => {
    expect(getByTestId('comment-list')).toBeTruthy();
})
