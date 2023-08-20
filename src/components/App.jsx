import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Movies from "./Movies/Movies";
import Cast from "./pages/Cast";
import MoviesDetails from "./pages/MoviesDetails";
import Reviews from "./pages/Reviews";
import   './Styles/Style.css';
export const App = () => {
  return (
    <div>
     
     <nav>
     <NavLink to='/'>Home</NavLink>
     <NavLink to='/movies'>Movies</NavLink>
     </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MoviesDetails/>}>
          <Route path="/movies/:movieId/cast" element={<Cast/>}/>
          <Route path="/movies/:movieId/reviews" element={<Reviews/>}/>
        </Route>
      </Routes>
      
    </div>
  );
};
