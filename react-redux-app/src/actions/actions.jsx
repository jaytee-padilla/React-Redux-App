import axios from 'axios';

export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getFilm = (filmIndex) => dispatch => {
	dispatch({type: FETCH_LOADING});
	return (
		axios.get("https://ghibliapi.herokuapp.com/films")
		.then(response => {
			dispatch({type: FETCH_SUCCESS, payload: response.data[filmIndex]});
		})
		.catch(error => {
			dispatch({type: FETCH_FAILURE, payload: error});
		})
	);
};