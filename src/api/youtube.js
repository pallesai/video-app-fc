import axios from 'axios';

const KEY = 'AIzaSyCVzKMZHDdUlkS2Ab7bBLhj8Pk2wsY_UrA';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});
