import { SAVE_COMMENT, FETCH_COMMENT } from '../actions/types';

export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENT:
      return [...state, ...action.payload.data.map((comment) => comment.name)];
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
