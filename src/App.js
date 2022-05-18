import { Route, Routes } from 'react-router-dom';
import './App.css';
import ToDo from './components/ToDo/ToDo';


function App() {
  return (
    <section>
      <h1 className='text-center'>Welcome</h1>
      <Routes>
        <Route path='/' element={<ToDo></ToDo>}></Route>
      </Routes>
    </section>
  );
}

export default App;
