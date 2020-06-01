import { saveComment } from '../index';
import { SAVE_COMMENT } from '../types';

describe('saveComment', () => {
    it('has a correct type', () => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has a correct payload', () => {
        const action = saveComment('new comments');
        expect(action.payload).toEqual('new comments');        
    })
});