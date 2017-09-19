import { FETCH_CLIENT } from '../actions/types'

export default function (state = {}, action){

	switch (action.type) {

		case FETCH_CLIENT:
			return action.payload || false
            
		default:
			return state
	}
}
