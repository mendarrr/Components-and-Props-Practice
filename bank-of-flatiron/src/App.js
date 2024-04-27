// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Transaction from './components/Transaction';
import Form from './components/Form';
import SearchBar from './components/SearchBar.';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar/>
      <Form />
      <Transaction/>
     

    </div>
  );
}

export default App;