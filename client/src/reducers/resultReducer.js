import { RESULT } from '../actions/types'

export default function (state = null, action){

	switch (action.type) {

		case RESULT:
			return action.payload || false

		default:
			return state
	}
}
