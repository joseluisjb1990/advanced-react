import commentsReducer from '../../reducers/comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'new_comment'
    }

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['new_comment']);
});

it('handles action with unknown type', () => {
    const action = {
        type: 'SADASDASCASCA',
        payload: 'new_comment'
    }
    const newState = commentsReducer([], action);
    expect(newState).toEqual([]);
});