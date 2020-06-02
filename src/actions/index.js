import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENT } from './types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fetchComments() {
  const response = axios.get('http://localhost:3001');
  return {
    type: FETCH_COMMENT,
    payload: response,
  };
}
