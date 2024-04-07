// Fetch data from JSON file

function parsing_that_file(filezz){
    fetch(filezz)
    .then(response => response.json())
    .then(data => {
        // Process data and generate HTML
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = ''; // Clear previous content

        // Iterate over each record in the data
        data.forEach(record => {
        // Create card element
        const card = document.createElement('h3');
        card.classList.add('Recipe');

        // Create card content
        const title = document.createElement('p');
        title.textContent = record.name;
        card.appendChild(title);

        const details = document.createElement('p');
        details.textContent = `Time: ${record.time}`;
        card.appendChild(details);

        const ingredients = document.createElement('p');
        ingredients.textContent = `Steps: ${record.ingredients}`;
        card.appendChild(ingredients);

        const steps = document.createElement('p');
        steps.textContent = `Steps: ${record.steps}`;
        card.appendChild(steps);

        // Append card to container
        cardContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
