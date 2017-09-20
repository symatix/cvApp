import { FETCH_CLIENT, CLEAR_STATE } from '../actions/types'

export default function (state = {}, action){

	switch (action.type) {

		case FETCH_CLIENT:
			return action.payload || false

        case CLEAR_STATE:
            return {};

		default:
			return state
	}
}
