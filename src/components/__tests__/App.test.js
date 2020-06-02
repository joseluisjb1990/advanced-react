import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Root from '../../Root';

let queryByTestId;

beforeEach(() => {
  const { queryByTestId: localQueryByTestId } = render(
    <Root>
      <App />
    </Root>,
  );
  queryByTestId = localQueryByTestId;
});

it('shows a comment box', () => {
  expect(queryByTestId('comment-box')).not.toBeNull();
});

it('shows a comment list', () => {
  expect(queryByTestId('comment-list')).not.toBeNull();
});
