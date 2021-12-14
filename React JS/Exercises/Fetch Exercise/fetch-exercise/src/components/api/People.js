import axios from 'axios';

const API_URL = 'https://swapi.dev/api';

export const getPeople = async (persons = 10) => {
    let PEOPLE = []; // Array of persons
    let displayedFetch = persons / 10; // Fetch Only 10 persons out of 82

    for(let ctr = 1; ctr <= displayedFetch; ctr++) {
        if(ctr === 1) {
            const response = await axios.get(`${API_URL}/people`); // /people for complete url
            console.log(response);
            response.data.results.map(result => PEOPLE.push(result)); // Push the result data from response to the array
        }
        else {
            const response = await axios.get(`${API_URL}/people/?page=${ctr}`); // /people for complete url with page number
            response.data.results.map(result => PEOPLE.push(result)); // Push the result data from response to the array
        }
    }

    return PEOPLE;
};

export const getPersons = async (nextPerson) => {
    try {
        const response = await axios.get(`${API_URL}/people/${nextPerson+1}`);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}