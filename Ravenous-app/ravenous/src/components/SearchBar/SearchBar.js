import React from 'react';
import './SearchBar.css';

//object with keys and values that conform to what the API expects to receive 
const sortByOptions = {
    "Best Match"    : 'best_match',
    "Highest Rated" : 'rating',
    "Most Reviewed" : 'review_count',
}

// Seacrh Bar component

class SearchBar extends React.Component {

//Render Mthood to dynamically create the list items needed to display the sort options (Best Match, Highest Rated, Most Reviewed)  
renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption =>{
            let sortByOptionValue = sortByOptions[sortByOption];  
            return <li key={sortByOptionValue}> {sortByOptions} </li>;
        });
    };
render() {
    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div>
        );
    }
};

