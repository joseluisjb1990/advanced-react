import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    comments: state.comments,
  };
}

export default connect(mapStateToProps)(({ comments }) => {
  const renderComments = () => comments.map((comment) => (
    <li data-testid="comment-list-element" key={`${comment}`}>
      {comment}
    </li>
  ));

  return (
    <div data-testid="comment-list">
      <h4>Comment List</h4>
      <ul data-testid="comment-list-wrapper">{renderComments()}</ul>
    </div>
  );
});
