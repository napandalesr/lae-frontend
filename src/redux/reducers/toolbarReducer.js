import { types } from '../types';

export const toolbar = (state = {}, action) => {
	switch (action.type) {
		case types.notification:
				return {
					...state,
					notification: action.payload
				};
		default:
			return state;
	}
};
