import { FETCH_DOCS } from '../actions/types'

export default function (state = [], action){

	switch (action.type) {

		case FETCH_DOCS:
			return action.payload

		default:
			return state
	}
}
