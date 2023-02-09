const apiKey=process.env.VUE_APP_NETFLIX_API;
const url=process.env.VUE_APP_BASE_URL;



const requests={
    movie:url+"/movie/550?api_key="+apiKey,
}


export default requests;