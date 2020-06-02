import React from 'react';
import { render } from '@testing-library/react';
import CommentList from '../CommentList';
import Root from '../../Root';

let queryAllByTestId;
let queryByText;

const comments = ['comment 1', 'comment 2'];
beforeEach(() => {
  const {
    queryAllByTestId: localQueryAllByTestId,
    queryByText: localQueryByText,
  } = render(
    <Root
      initialState={{
        comments,
      }}
    >
      <CommentList />
    </Root>,
  );
  queryAllByTestId = localQueryAllByTestId;
  queryByText = localQueryByText;
});

it('creates one li per comment', () => {
  const commentsElement = queryAllByTestId('comment-list-element');
  expect(commentsElement).toHaveLength(2);
});

it('renders comments text', () => {
  comments.forEach((comment) => {
    expect(queryByText(comment)).not.toBeNull();
  });
});
