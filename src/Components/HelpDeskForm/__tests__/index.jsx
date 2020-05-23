import React from 'react'
import {render, fireEvent, act, queryByText} from '@testing-library/react'
import HelpDeskForm from '..'
import ErrorBoundary from '../errorBoundary'

// beforeAll(() => {
//   jest.spyOn(console, 'error').mockImplementation(() => {})
// })

// afterAll(() => {
//   console.error.mockRestore()
// })

// afterEach(() => {
//   jest.clearAllMocks()
// })

// test('all expected fields display', () => {
//   const {getByText} = render(
//     <ErrorBoundary>
//       <HelpDeskForm />
//     </ErrorBoundary>,
//   )
//   const nameEl = getByText(/Name/i)

//   expect(nameEl).toBeDefined()
// })

test('error displays on invalid entry', async () => {
  const {debug, queryByText, getByLabelText, getByText} = render(
    <HelpDeskForm />,
    {
      wrapper: ErrorBoundary,
    },
  )

  fireEvent.click(getByText(/submit/i))

  //getByText(/name is required/i)

  // const input = getByLabelText(/name/i)
  // fireEvent.change(input, {target: {value: 'Justin Osterholt'}})
  // expect(input.value).toBe('Justin Osterholt')

  // fireEvent.click(getByText(/submit/i))

  // expect(queryByText(/name is required/i)).toBeNull()
})
