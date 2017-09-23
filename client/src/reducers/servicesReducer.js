import { FETCH_SERVICES } from '../actions/types'

export default function (state = [], action){

	switch (action.type) {

		case FETCH_SERVICES:
			return action.payload || false;

		default:
			return state
	}
}
