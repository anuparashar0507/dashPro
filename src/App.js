import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import columns from "./assets/columns";
import data from "./assets/data";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <div className="main">
          <Table columns={columns} data={data} pageLimit="5" />
        </div>
      </div>
    </div>
  );
}

export default App;
