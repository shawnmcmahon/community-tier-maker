import './App.css';
import HomePage from '../HomePage/HomePage.js'
import HomePage2 from '../HomePage/HomePage2.js'
import { DragDropContext } from 'react-beautiful-dnd';

const App = () => {
  return (
    <div className="App">
      <HomePage2 />
    </div>
  );
}

export default App;
