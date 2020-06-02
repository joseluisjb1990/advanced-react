import { SAVE_COMMENT, FETCH_COMMENT } from './types';
import axios from 'axios';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments(comment) {
    const response = axios.get('http://localhost:3001');
    return {
        type: FETCH_COMMENT,
        payload: response
    }
}