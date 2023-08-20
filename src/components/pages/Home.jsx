import axios from 'axios';
function Home (){
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/all/day',
        params: {language: 'en-US'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTllMDAxZjNmOTMyZDM1M2MyOWZhZmE2NGY2OWY3ZSIsInN1YiI6IjY0ZTBjN2Y1MzcxMDk3MDBmZmJhNDhkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.huWKRRRM3nfIfTEIgc0Hxk4hUE_lvJVFzXYsi-KttIc'
        }
      };
      axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
    return(
        <div>Home
        
        </div>
    )
}
export default Home;