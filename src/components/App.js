import React from 'react';

import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import CommentBox from './CommentBox';
import * as actions from '../actions';

const App = ({ auth, changeAuth }) => {
  const renderButton = () => {
    if (auth) {
      return (
        <button
          data-testid="sign-out-button"
          type="button"
          onClick={() => changeAuth(false)}
        >
          Sign Out
        </button>
      );
    }
    return (
      <button
        data-testid="sign-in-button"
        type="button"
        onClick={() => changeAuth(true)}
      >
        Sign In
      </button>
    );
  };

  const renderHeader = () => (
    <ul
      data-testid="header-container"
    >
      <li>
        <Link data-testid="go-home" to="/">Home</Link>
      </li>
      <li>
        <Link data-testid="post-comment-button" to="/post">Post A Comment</Link>
      </li>
      <li>{renderButton()}</li>
    </ul>
  );

  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

App.propTypes = {
  auth: PropTypes.bool.isRequired,
  changeAuth: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(App);
