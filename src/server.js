const express = require('express');
const app = express();

// Import the necessary functions
// Adjust paths as necessary
const searchForJson = require('../components/Get_Function');
const processRecipe = require('../components/Process_Recipe'); 

// Middleware to parse JSON request bodies
app.use(express.json());

app.get('/filter', async (req, res) => {
    const maxCookTime = parseInt(req.query.maxCookTime);
    const avoidedFoods = req.query.avoidedFoods ? req.query.avoidedFoods.split(',') : [];
    const keyIngredients = req.query.keyIngredients ? req.query.keyIngredients.split(',') : [];

    try {
        const result = await searchForJson(keyIngredients, maxCookTime, avoidedFoods);
        res.json({ result }); // Send back the result as a JSON response
    } catch (error) {
        res.status(500).send("Error processing your request");
    }
});

app.post('/recipes', async (req, res) => {
    const { authorName, recipeName, difficultyLevel, cookTime, recipeDetails } = req.body;

    try {
        const result = await processRecipe({ authorName, recipeName, difficultyLevel, cookTime, recipeDetails });
        res.json({ message: "Recipe submitted successfully", result }); // Send back a success message and result
    } catch (error) {
        res.status(500).send("Error processing recipe submission");
    }
});

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
