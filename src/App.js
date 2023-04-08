import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer.js';


function App() {
  return (
    <>
      <NavBar />
      <ItemsListContainer greeting="Bienvenidos al mundo de las papas"/>
    </>
    
  )
}

export default App;
