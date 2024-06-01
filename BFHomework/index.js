

document.getElementById('fetchJokes').addEventListener('click', async () => {

try{



    const res = await fetch("http://localhost:3000/jokes")

    if (!res.ok) {
        throw new Error(`http error status ${res.status}`)
    }

    const data = await res.json()

    const categories = data.map(joke => joke.category).join('\n')
    const setups = data.map(joke => joke.setup).join('\n')
    const deliveries = data.map(joke => joke.delivery).join('\n')

    const arrCats = categories.split("\n")
    const arrSetups = setups.split("\n")
    const arrDeliveries = deliveries.split("\n")

    const arrJokes = []

    for (let i=0; i<arrCats.length; i++){

        arrJokes.push(new JokeClass(arrCats[i],arrSetups[i],arrDeliveries[i]))
    }

     arrJokes.forEach( url => {

        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card')

        cardContainer.style.margin = "10%"

        const h3Setup = document.createElement('h3')
        h3Setup.innerText = url.setup

        const h3Delivery = document.createElement('h3')
        h3Delivery.innerText = url.delivery

        const h2Category = document.createElement('h2')
        h2Category.innerText = url.category

        cardContainer.appendChild(h3Setup)
        cardContainer.appendChild(h3Delivery)
        cardContainer.appendChild(h2Category)

        document.getElementById('svgContainer').appendChild(cardContainer)

     })


    } catch (error){
        console.log('fetch error')
    }




})