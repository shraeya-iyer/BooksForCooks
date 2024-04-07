import React, { useState } from 'react';
import { FaFilter, FaTimes } from "react-icons/fa";
import axios from 'axios';
import './EnterYourRecipes.css';

const Form = () => {
    const [authorName, setAuthorName] = useState('');
    const [recipeName, setRecipeName] = useState('');
    const [difficultyLevel, setDifficultyLevel] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [recipeDetails, setRecipeDetails] = useState('');
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleClick = () => {
        setIsExpanded(!isExpanded);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!recipeName) {
            setError('Recipe name is required');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/recipes', {
                authorName,
                recipeName,
                difficultyLevel,
                cookTime,
                recipeDetails
            });
            setResults(response.data);
            setError(null);
        } catch (err) {
            setError('Error submitting recipe');
            setResults(null);
        }
    };

    return (
        <div className='header'>
            <div className='hamburger' onClick={handleToggleClick}>
                {isExpanded ? <FaTimes size={20} style={{ color: '#000' }} /> : <FaFilter size={20} style={{ color: '#fff' }} />}
            </div>

            {isExpanded && (
                <form id="recipe-form" onSubmit={handleSubmit}>
                    <div className="form-section">
                        <label htmlFor="author-name">Author Name:</label>
                        <input type="text" id="author-name" value={authorName} onChange={(e) => setAuthorName(e.target.value)} placeholder="Enter your username" />
                    </div>
                    <div className="form-section">
                        <label htmlFor="recipe-name">Recipe Name*:</label>
                        <input type="text" id="recipe-name" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} required placeholder="Enter recipe name" />
                    </div>
                    <div className="form-section">
                        <label htmlFor="difficulty-level">Difficulty Level:</label>
                        <input type="text" id="difficulty-level" value={difficultyLevel} onChange={(e) => setDifficultyLevel(e.target.value)} placeholder="Enter difficulty level" />
                    </div>
                    <div className="form-section">
                        <label htmlFor="cook-time">Cook Time (in minutes):</label>
                        <input type="number" id="cook-time" value={cookTime} onChange={(e) => setCookTime(e.target.value)} min="0" placeholder="Time in minutes" />
                    </div>
                    <div className="form-section">
                        <label htmlFor="recipe-details">Recipe Details:</label>
                        <textarea id="recipe-details" value={recipeDetails} onChange={(e) => setRecipeDetails(e.target.value)} placeholder="Enter recipe details"></textarea>
                    </div>
                    <button type="submit">Submit Recipe</button>
                </form>
            )}

            {results && <div>Submitted Successfully: {JSON.stringify(results)}</div>}
            {error && <div>Error: {error}</div>}
        </div>
    );
};

export default Form;
