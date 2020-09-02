import React from 'react';
import './SearchBar.css';

//object with keys and values that conform to what the API expects to receive 
const sortByOptions = {
    "Best Match"    : 'best_match',
    "Highest Rated" : 'rating',
    "Most Reviewed" : 'review_count',
}