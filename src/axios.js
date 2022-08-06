import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;

// 'export default instance' means when we import in another file, we can do 'import axios from "./axios.js"', and 'axios' would correspond to the default export, that is, 'instance'
// note that 'axios' here is just an alias that is give to the default export
// we can do multiple exports using 'export', and while importing we'll have to write 'import {instance} from "./axios.js"