import axios from "axios";

export default axios.create({
    baseURL: `https://api.yelp.com/v3/businesses/`,
    headers: {
        Authorization: `Bearer uy0VB-qAzgsyRjpylNOj6d7j7kXrxqYhtnM-wGhwRYhZpdUHYYWypQZywNVA6SCLw8Y7s_0ZoKKsD9Kk2Ptnfh1qxn7zOXK4Xp0FGheGDNDDUj4vkX6qD6EZp-9PYHYx`
    }
})