
import Searchbar from './components/Searchbar'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Rows from './components/Rows';
function App() {

  return (
    <div className="App">
      <Header />
      <div className = "container">  
      <Sidebar />
       <div className= "main">
       <Searchbar />
       <Rows />
 
       </div>
              </div>
    </div>
  );
}

export default App;
