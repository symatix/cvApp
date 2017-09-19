import { CLEAR_STATE, FETCH_SERVICES } from '../actions/types'

export default function (state = [], action){

	switch (action.type) {

		case FETCH_SERVICES:
			return action.payload || false;

        case CLEAR_STATE:
            return [];

		default:
			return state
	}
}
