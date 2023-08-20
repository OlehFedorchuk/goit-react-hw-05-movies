import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Header from "./Header/Header";
import   './Styles/Style.css';
export const App = () => {
  return (
    <div>
      <Header/>
     
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies/>}/>
      </Routes>
      
    </div>
    
     
      

    
    
  );
};
