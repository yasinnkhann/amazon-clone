import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-ce636.cloudfunctions.net/api'
  // 'http://localhost:5001/clone-ce636/us-central1/api'
});

export default instance;

