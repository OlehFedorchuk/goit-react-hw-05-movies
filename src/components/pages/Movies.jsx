import axios from 'axios';
import { useParams } from 'react-router-dom';

function MoviesDetails(){
    const { id } = useParams();
    console.log('message', id)
const options = {
  method: 'GET',
  url: `https://api.themoviedb.org/3/movie/${id}`,
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
        <div>
            <img
                src={`https://image.tmdb.org/t/p/w500${id.poster_path}`}
               // alt={response.data.results.title || response.data.results.name}
            />
        



        </div>
    )
}
export default MoviesDetails;
