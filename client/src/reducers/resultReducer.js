import { RESULT, CLEAR_STATE } from '../actions/types'

export default function (state = null, action){

	switch (action.type) {

		case RESULT:
			return action.payload || false

        case CLEAR_STATE:
            return null;

		default:
			return state
	}
}
