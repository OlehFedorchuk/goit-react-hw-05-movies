import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

function Home (){
    const [articles, setArticles] = useState([]);
    const options = useMemo(() => ({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/all/day',
        params: {language: 'en-US'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTllMDAxZjNmOTMyZDM1M2MyOWZhZmE2NGY2OWY3ZSIsInN1YiI6IjY0ZTBjN2Y1MzcxMDk3MDBmZmJhNDhkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.huWKRRRM3nfIfTEIgc0Hxk4hUE_lvJVFzXYsi-KttIc'
        }
    }), []);

    useEffect(() => {
        axios
        .request(options)
        .then(function (response) {
          setArticles(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });

    }, [options]);

   

    return(
        <div>
            <h1>Trending today</h1>
            <ul>
                {articles.map(article => (
                   <li key={article.id}> 
                   <NavLink to={`/movies/${article.id}`} >
                    {article.title ? article.title : article.name}
                   </NavLink>
                   </li>
                  
                ))}
            </ul>
        </div>
    )
}

export default Home;