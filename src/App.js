import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar modules={["1","hej"]}/>
      </div>
    </div>
  );
}

export default App;
