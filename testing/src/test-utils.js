import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import Root from 'Root'

function render(ui, { initialState, ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <Root initialState={initialState}>{children}</Root>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }