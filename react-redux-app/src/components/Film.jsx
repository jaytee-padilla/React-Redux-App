import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

// actions
import { getFilm } from '../actions/actions';

function Film(props) {
	// on page load/refresh, displays first item of the Studio Ghibli Films API
	// the 0 represents the index item to display within the Ghibli Films API array
	useEffect(() => {
		props.getFilm(0);
	}, []);
	
	return (
		<div>
			{props.isLoading ? <Loader type="Oval" color="lightblue" height={80} width={80} /> :
			props.error !== "" ? <h1>{props.error.message}</h1> :
				<div>
					<h1>{props.title}</h1>
					<h3>{props.release_date}</h3>
					<p>{props.description}</p>
				</div>
			}

			<div>
				<button>Previous Film</button>
				<button>Next Film</button>
			</div>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		...state
	};
}

export default connect(
	mapStateToProps,
	{ getFilm }
)(Film);
