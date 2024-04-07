import React, { useState } from 'react';
import { FaFilter, FaTimes } from "react-icons/fa";
import axios from 'axios';
import './FormStyles.css';


const Form = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [maxCookTime, setMaxCookTime] = useState('');
    const [avoidedFoods, setAvoidedFoods] = useState('');
    const [keyIngredients, setKeyIngredients] = useState('');
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    const handleToggleClick = () => {
        setIsExpanded(!isExpanded);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            //console.log("BAM BAM BAM BAM")
            const response = await axios.get('http://localhost:3001/filter', {
                params: { maxCookTime, avoidedFoods, keyIngredients }
            });
            setResults(response.data);
            setError(null);
        } catch (err) {
            setError('hello world!');
            setResults(null);
        }
        console.log('Submitted values:', { maxCookTime, avoidedFoods, keyIngredients });
    };

    console.log('Submitted values:', { maxCookTime, avoidedFoods, keyIngredients });
    

    return (
        <div className='header'>
            <div className='hamburger' onClick={handleToggleClick}>
                {isExpanded ? <FaTimes size={20} style={{ color: '#000' }} /> : <FaFilter size={20} style={{ color: '#fff' }} />}
            </div>

            {isExpanded && (
                <form id="filter-form" onSubmit={handleSubmit}>
                    <div className="filter-section">
                        <label htmlFor="max-cook-time">Maximum Cook Time:</label>
                        <input type="number" id="max-cook-time" value={maxCookTime} onChange={(e) => setMaxCookTime(e.target.value)} min="0" placeholder="Time in minutes" />
                    </div>
                    <div className="filter-section">
                        <label htmlFor="avoided-foods">Avoided Foods:</label>
                        <input type="text" id="avoided-foods" value={avoidedFoods} onChange={(e) => setAvoidedFoods(e.target.value)} placeholder="Enter foods to avoid" />
                    </div>
                    <div className="filter-section">
                        <label htmlFor="key-ingredients">Key Ingredients:</label>
                        <input type="text" id="key-ingredients" value={keyIngredients} onChange={(e) => setKeyIngredients(e.target.value)} placeholder="Enter required ingredients" />
                    </div>
                    <button type="submit">Apply Filters</button>
                </form>
            )}

<           div id="cardContainer">
                {results && <div>Results: {JSON.stringify(results)}</div>}
                {error && <div>{error}</div>}
            </div>
        </div>
    );
};

export default Form;
