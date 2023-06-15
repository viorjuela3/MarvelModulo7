import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import { Login } from './components/Login';
import ComicDetail from './components/ComicDetail';
import ComicList from './components/ComicList';
import FavoriteComics from './components/FavoriteComics';
import Footer from './components/Footer';

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (comic) => {
    setFavorites([...favorites, comic]);
  };
  

  return (
    <Router>
      <div className="App">
        <Header />


        
          <Routes>
          <Route exact path="/" element={<Login/>}/>
          </Routes>

          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<ComicList />} />
          <Route path="/comics/:id" element={<ComicDetail />} />
          <Route
            path="/favorites"
            element={<FavoriteComics favorites={favorites} setFavorites={setFavorites} addToFavorites={addToFavorites} />}
          />
        </Routes>
        <Footer />
       
      </div>
    </Router>
  );
}

export default App;