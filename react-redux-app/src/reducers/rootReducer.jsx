import axios from 'axios';

// actions
import { FETCH_LOADING } from '../actions/actions';
import { FETCH_SUCCESS } from '../actions/actions';
import { FETCH_FAILURE } from '../actions/actions';

let initialState = {
	id: "",
	title: "",
	description: "",
	release_date: "",
	isLoading: false,
	error: "" // if there is an error getting the data, an error message will display based on the data fetching status
};

export const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_LOADING:
			return {
				...state,
				error: "Loading...",
				isLoading: true
			};

			case FETCH_SUCCESS:
				return {
					...state,
					id: action.payload.id,
					title: action.payload.title,
					description: action.payload.description,
					release_date: action.payload.release_date,
					error: "",
					isLoading: false
				};

				case FETCH_FAILURE:
					return {
						...state,
						error: action.payload,
						isLoading: false
					};

		default:
			return state;
	}
};