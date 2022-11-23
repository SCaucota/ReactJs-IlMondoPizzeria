import logo from './logo.svg';
import './App.css';
import "./components/NavBar/NavBar.css";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <ItemListContainer name="Carlitos"/>
      </header>
    </div>
  );
}

export default App;
