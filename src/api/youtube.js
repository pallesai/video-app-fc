import axios from 'axios';

const KEY = 'AIzaSyD09zjA9ABc_bKBFZCygkH1tfIAkazh6ss';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});
