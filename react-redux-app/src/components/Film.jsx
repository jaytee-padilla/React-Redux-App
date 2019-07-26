import React from 'react';
import { connect } from 'react-redux';

// actions
import { getFilm } from '../actions/actions';

function Film(props) {
	return (
		<div>
			<h1>Movie Title Here</h1>
			<h3>Release Date Here</h3>
			<p>Description goes here</p>
			<button>Previous Film</button>
			<button>Next Film</button>
		</div>
	)
};

const mapStateToProps = state => {
	return {};
}

export default connect(
	mapStateToProps,
	{ getFilm }
)(Film);
