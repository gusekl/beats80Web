import './App.css';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <div className='header'>
        <Navbar modules={["1","hej"]}/>
      </div>
    </div>
  );
}

export default App;
