


const express = require('express')
const cors = require('cors')

const app= express()
const PORT = 3000
//const baseURL = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10'
const baseURL ='https://restcountries.com/v2/all?fields=name,flag,nativeName'


app.use(cors())

app.get('/jokes' , async (req, res) => {

    try{
        const apiRes = await fetch (baseURL)

        if (!apiRes.ok){
            throw new Error (`http error status: ${apiRes.status}`)
        }

        const data = apiRes.json()

        res.json(data)
    } catch (error) {
        console.error('fetch error')
        res.status(500).send(`internal server error`)
    }

})


app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})