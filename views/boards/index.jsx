const React = require('react')
const Def = require('../default')
// const axios = require('axios')

// const options = {
//     method: 'GET',
//     url: 'https://pokedex2.p.rapidapi.com/pokedex/uk/pikachu',
//     headers: {
//         'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//         'X-RapidAPI-Host': 'pokedex2.p.rapidapi.com'
//     }
// };

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

function index(data) {
    return (
        <Def>
            <h1>Boards</h1>
        </Def>
    )

}

module.exports = index