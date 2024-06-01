document.getElementById('fetchButton').addEventListener('click', async () => {
    try {

        // Make a GET request to the Node.js server
        const response = await fetch('http://localhost:3000/jokes');

        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        // Parse the response JSON
        const data = await response.json();
        console.log(data)


        // Extract jokes
        //const names = data.map(country => country.name).join('\n');
        //const title = data.map((game) => game.title).join("\n");
        const setups =    data["jokes"].map(joke => joke.setup).join("\n");
        const deliverys = data["jokes"].map(joke => joke.delivery).join("\n");
        const categorys = data["jokes"].map(joke => joke.category).join("\n");

        const arrSetups = setups.split("\n");
        const arrDeliveries = deliverys.split("\n");
        const arrCategories = categorys.split("\n");

        const arrJokes = [];

        for (let i=0 ; i<arrSetups.length ; i++)
            {
                arrJokes.push(new JokeClass(arrSetups[i],arrDeliveries[i],arrCategories[i]));
            }

        arrJokes.forEach((url) => {

            const cardContainer = document.createElement("div");
            cardContainer.classList.add("card");

            const h3Setup = document.createElement("h2");
            h3Setup.innerText = url.setup;

            const h3Del = document.createElement("h2");
            h3Del.innerText = url.delivery;

            const pCategory = document.createElement("p");
            pCategory.innerText = "Category: "+ url.category;

            cardContainer.appendChild(h3Setup);
            cardContainer.appendChild(h3Del);
            cardContainer.appendChild(pCategory);

            document.getElementById("svgContainer").appendChild(cardContainer);

        })



    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    }
});