import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Footer from './components/Footer';
import { ComicList } from './components/ComicList';

function App() {
  return (
    <div className="App">

      <Header/>
      <Login/>
      <ComicList/>
      <Footer/>

    </div>
  );
}

export default App;