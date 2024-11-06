import { fetchData } from "./api.js";
import {  alertErreur } from "./dom.js";


try {
    const data = await fetchData('https://jsonplaceholder.typicode.com/posts?_limit=5');
    console.log(data);
} catch (error) {
  alertErreur(error.message);
  
}
