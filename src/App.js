import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Comics from './components/Comics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header/>
      <Login/>
      <Comics/>
      <Footer/>

    </div>
  );
}

export default App;
