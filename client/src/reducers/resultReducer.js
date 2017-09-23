import { RESULT, RESET } from '../actions/types'

export default function (state = null, action){

	switch (action.type) {

		case RESULT:
			return action.payload || false

		case RESET: // this resets the master state
			return action.payload

		default:
			return state
	}
}
