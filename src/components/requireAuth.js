import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default ChildComponent => {
  const ComposedComponent = ({ auth, history, ...rest }) => {
    useEffect(() => {
      if (!auth) {
        history.push('/');
      }
    });
    return <ChildComponent {...rest}/>
  }

  return connect(mapStateToProps)(ComposedComponent);
};
