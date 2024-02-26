import axios from 'axios';

import { postsAPI } from '../urls/indexurl';

const fetchPosts = () => {
  return axios.get(postsAPI)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}



export default fetchPosts

