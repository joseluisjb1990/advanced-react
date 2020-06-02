import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}


export default connect(mapStateToProps)(({ comments }) => {
    const renderComments = () => {
        return comments.map((comment, index) => {
            return <li data-testid="comment-list-element" key={index}>{ comment }</li>
        });
    }

    return (
        <div data-testid="comment-list">
            <ul data-testid="comment-list-wrapper">{renderComments()}</ul>
        </div>
    );
});