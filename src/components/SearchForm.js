import React, { useState } from 'react';
import axios from 'axios';

function SearchForm() {
    const [maxCookTime, setMaxCookTime] = useState('');
    const [avoidedFoods, setAvoidedFoods] = useState('');
    const [keyIngredients, setKeyIngredients] = useState('');
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('http://localhost:3001/filter', {
                params: { maxCookTime, avoidedFoods, keyIngredients }
            });
            setResults(response.data);
            setError(null);
        } catch (err) {
            setError('Error fetching data');
            setResults(null);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={maxCookTime} 
                    onChange={(e) => setMaxCookTime(e.target.value)} 
                    placeholder="Max Cooking Time"
                />
                <input 
                    type="text" 
                    value={avoidedFoods} 
                    onChange={(e) => setAvoidedFoods(e.target.value)} 
                    placeholder="Avoided Foods"
                />
                <input 
                    type="text" 
                    value={keyIngredients} 
                    onChange={(e) => setKeyIngredients(e.target.value)} 
                    placeholder="Key Ingredients"
                />
                <button type="submit">Search</button>
            </form>
            {results && <div>Results: {JSON.stringify(results)}</div>}
            {error && <div>{error}</div>}
        </div>
    );
}

export default SearchForm;
