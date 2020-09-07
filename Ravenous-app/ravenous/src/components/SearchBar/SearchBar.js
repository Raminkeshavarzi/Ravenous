// ************* //
// This compenet is built component that will be used in the future to search for business
// ************//

import React from 'react';
import './SearchBar.css';

//object with keys and values that conform to what the API expects to receive
const sortByOptions = {
	'Best Match': 'best_match',
	'Highest Rated': 'rating',
	'Most Reviewed': 'review_count'
};

// Seacrh Bar component

class SearchBar extends React.Component {
	// constructor
	constructor(props) {
		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match'
		};
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
	}

	getSortByClass(sortByOption) {
		if (sortByOption === this.state.sortBy) {
			return 'Active';
		}
		return '';
	}
	// method to handle sorting
	handleSortByChange(sortByOption) {
		this.setState({
			sortBy: sortByOption
		});
	}
	// method to handle term changes
	handleTermChange(event) {
		this.setState({ term: event.target.value });
	}

	// method to handle Location change
	handleLocationChange(event) {
		this.setState({ location: event.target.value });
	}

	// method to handle click on let's go button
	handleSearch(event) {
		this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
		event.preventDefault();
	}

	renderSortByOptions() {
		term;
		return Object.keys(sortByOptions).map((sortByOption) => {
			let sortByOptionValue = sortByOptions[sortByOption];
			return (
				<li
					key={sortByOptionValue}
					onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
					className={this.getSortByClass(sortByOption)}
				>
					{sortByOption}
				</li>
			);
		});
	}

	render() {
		return (
			<div className="SearchBar">
				<div className="SearchBar-sort-options">
					<ul>{this.renderSortByOptions()}</ul>
				</div>
				<div className="SearchBar-fields">
					<input placeholder="Search Businesses" onChange={this.handleTermChange} />
					<input placeholder="Where?" onChange={this.handleLocationChange} />
				</div>
				<div className="SearchBar-submit">
					<a>Let's Go</a>
				</div>
			</div>
		);
	}
}

export default SearchBar;
