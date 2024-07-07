import logo from './logo.svg';
import './App.css';
import Thead from './tableData/thead';
import Tbody from './tableData/thead';

function App() {
  return (
    <div className="App">
     <table className="table">
      
      <Thead/>
      <Tbody/> 
      <tr>
      <td>Sahoo</td>
      <td>s@gmail.com</td>
      <td>2345678909</td>
      </tr>
     </table>
     <button>Create New</button>
    </div>
  );
}

export default App;
