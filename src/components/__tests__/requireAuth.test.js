import React from 'react';
import { render } from '@testing-library/react';
import Root from '../../Root';
import requireAuth from '../requireAuth';
import { BrowserRouter, MemoryRouter, Route } from 'react-router-dom';

it('Component shows when auth is true', () => {
  const EmptyComponent = requireAuth(() => <div data-testid="show-me" />);
  const {queryAllByTestId} = render(
    <Root initialState={{ auth: true }}>
      <EmptyComponent />
    </Root>,
  );

  const elems = queryAllByTestId('show-me');
  expect(elems).toHaveLength(1);
});

it('Component doest not shows when auth is false', () => {
  const EmptyComponent = requireAuth(() => <div data-testid="show-me" />);
  const { queryAllByTestId } = render(
    <Root initialState={{ auth: false }}>
      <MemoryRouter initialEntries={['/my/initial/route']}>
        <Route path="/my/initial/route" component={EmptyComponent} />
      </MemoryRouter>
    </Root>,
  );

  const elems = queryAllByTestId('show-me');
  expect(elems).toHaveLength(0);
});
