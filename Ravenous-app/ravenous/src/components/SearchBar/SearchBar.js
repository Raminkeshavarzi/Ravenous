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
    }  
}