import axios from "axios"
const instane = axios.create({
 baseUrl:'https://api.themoviedb.org/3',
})
export default instane; 