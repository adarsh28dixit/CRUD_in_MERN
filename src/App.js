
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EditScreen from './components/editScreen';

import Register from './components/register';
import List from './components/list';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/studentList" element={<List/>}/>
          <Route path="/editscreen/:id" element={<EditScreen/>}/>

        </Routes>
      
      

    </div>
    </BrowserRouter>
  );
}

export default App;
