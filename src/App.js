import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import ComicDetail from './components/ComicDetail';
import FavoriteComics from './components/FavoriteComics';
import ComicList from './components/ComicList';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">

      <Header/>
      <Login/>
      <ComicDetail/>
      <FavoriteComics/>
      <ComicList/>
      <Footer/>

    </div>
  );
}

export default App;