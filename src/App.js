import { Route, Routes } from 'react-router-dom';
import './App.css';
import ToDo from './components/ToDo/ToDo';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <section>
      <Routes>
        <Route path='/' element={<ToDo></ToDo>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </section>
  );
}

export default App;
