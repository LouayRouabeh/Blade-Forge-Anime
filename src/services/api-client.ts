import axios from "axios"

export default axios.create({
    method: 'GET',
    baseURL: 'https://anime-db.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': '2d20b64bb6msh5516869d5065d1fp17e689jsn736e2ea45b3b',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }  
})