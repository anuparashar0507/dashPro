import Searchbar from './components/Searchbar'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import Rows from './components/Rows';
import Table from './components/Table'
import columns from './assets/columns'
import data from './assets/data'

function App() {

  return (
    <div className="App">
      <Header />
      <div className = "container">  
      <Sidebar />
       <div className= "main">
       <Searchbar />
       {/* <Rows /> */}
       <Table columns={columns} data={data} />
       </div>
              </div>
    </div>
  );
}

export default App;
