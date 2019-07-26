const initialState = {
	id: "",
	title: "",
	description: "",
	release_date: "",
	currentFilmIndex: 0, // This will keep track of the array index of the current film object being displayed
	isLoading: false
}

export const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		default:
			return state;
	}
}