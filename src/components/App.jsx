import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoviesDetails from "./pages/MoviesDetails";
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
        {/* <Route path="/movies" element={<Movies/>}/> */}
        <Route path="/movies/:movieId" element={<MoviesDetails/>}/>
      </Routes>
      
    </div>
  );
};
