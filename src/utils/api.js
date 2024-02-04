import axios from "axios";

const baseUrl= 'https://youtube-v2.p.rapidapi.com';

const options = {
    params: {  
        hl: 'en',
        gl: 'US'
    },
    headers: {
        // 'X-RapidAPI-Key': `72d09dee18msh317b4eccc7b9a1ep1c5e9cjsn2ba34fb3383b`,
        'X-RapidAPI-Key': `${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
    }
};



export const fetchDataFromApi = async (url) =>{

    try {
        const response = await axios.request(`${baseUrl}/${url}`,options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


