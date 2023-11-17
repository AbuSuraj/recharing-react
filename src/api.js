import axios from "axios"

const searchImages = async(term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization:'Client-ID 7rfXocjpEO7FrC-TDNbCDTfNRakwaKYQ1DSfr3Jwl7E'
        },
        params:{
            query:term
        }
    })
    console.log(response.data.results);
    return response.data.results;
}
export default searchImages