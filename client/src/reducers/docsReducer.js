import { FETCH_DOCS, CLEAR_STATE } from '../actions/types'

export default function (state = [], action){

	switch (action.type) {

		case FETCH_DOCS:
			return action.payload

		case CLEAR_STATE:
			return [];

		default:
			return state
	}
}
