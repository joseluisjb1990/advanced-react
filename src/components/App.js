import React from 'react';

import { Route, Link } from 'react-router-dom';
import CommentList from './CommentList';
import CommentBox from './CommentBox';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PropTypes from 'prop-types';

const App = ({ auth, changeAuth }) => {
  const renderButton = () => {
    if (auth) {
      return <button type="button" onClick={() => changeAuth(false)}>Sign Out</button>
    } else {
      return <button type="button" onClick={() => changeAuth(true)}>Sign In</button>
    }
  }

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>
          {renderButton()}
        </li>
      </ul>
    )
  }

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
    auth: state.auth
  }
}

App.propTypes = {
  auth: PropTypes.bool.isRequired,
  changeAuth: PropTypes.func.isRequired
}

export default connect(mapStateToProps, actions)(App);
