import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let queryAllByTestId;

beforeEach(() => {
  const { queryAllByTestId: localQueryAllByTestId } = render(
    <Root initialState={{ auth: true }}>
      <CommentBox />
    </Root>,
  );
  queryAllByTestId = localQueryAllByTestId;
});

it('has only one comment box', () => {
  expect(queryAllByTestId('comment-box')).toHaveLength(1);
});

it('it has a textarea and a button', () => {
  const commentAreaSelector = queryAllByTestId('comment-input');
  const buttonCommentSelector = queryAllByTestId('comment-input');
  expect(commentAreaSelector).toHaveLength(1);
  expect(buttonCommentSelector).toHaveLength(1);
});

describe('the text are', () => {
  let commentArea;
  beforeEach(() => {
    const commentAreaSelector = queryAllByTestId('comment-input');
    [commentArea] = commentAreaSelector;
    fireEvent.change(commentArea, { target: { value: '23' } });
  });

  it('value changes on user input', () => {
    fireEvent.change(commentArea, { target: { value: '24' } });
    expect(commentArea.value).toBe('24');
  });

  it('form gets cleaned after its summited', () => {
    const commentFormSelector = queryAllByTestId('comment-form');
    expect(commentFormSelector).toHaveLength(1);
    const [commentForm] = commentFormSelector;

    expect(commentArea.value).toBe('23');

    fireEvent.submit(commentForm);
    expect(commentArea.value).toBe('');
  });
});
