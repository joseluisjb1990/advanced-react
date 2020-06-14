import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import Root from '../../Root';

let queryByTestId;
let queryAllByTestId;

beforeEach(() => {
  const { queryByTestId: localQueryByTestId, queryAllByTestId: localQueryAllByTestId } = render(
    <Root>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Root>,
  );
  queryByTestId = localQueryByTestId;
  queryAllByTestId = localQueryAllByTestId;
});

it('shows header', () => {
  expect(queryByTestId('header-container')).not.toBeNull();
});

it('shows sign in button by default', () => {
  expect(queryByTestId('sign-in-button')).not.toBeNull();
});

it('shows sign out button when sign in is clicked', () => {
  const buttonQuery = queryAllByTestId('sign-in-button');
  expect(buttonQuery).toHaveLength(1);
  const [buttonElement] = buttonQuery;

  fireEvent.click(buttonElement);

  expect(queryByTestId('sign-out-button')).not.toBeNull();
  expect(queryByTestId('sign-in-button')).toBeNull();
});
