import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export default connect(
  null,
  actions,
)(({ saveComment, fetchComments }) => {
  const [comment, setComment] = useState('');

  return (
    <div data-testid="comment-box">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          saveComment(comment);
          setComment('');
        }}
        data-testid="comment-form"
      >
        <h4>Add a Comment</h4>
        <textarea
          data-testid="comment-input"
          value={comment}
          onChange={(event) => {
            event.preventDefault();
            setComment(event.target.value);
          }}
        />
        <div>
          <button type="button" data-testid="submit-comment">
            Submit Comment
          </button>
        </div>
      </form>
      <button
        type="button"
        data-testid="fetch-comments"
        onClick={fetchComments}
      >
        Fetch Comments
      </button>
    </div>
  );
});
