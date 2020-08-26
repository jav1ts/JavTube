import axios from 'axios';

const KEY = 'AIzaSyD6tgfqS-95ovgAxAHhTSO5HsYP0lBqTWs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});