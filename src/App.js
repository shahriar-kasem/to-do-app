import { Route, Routes } from 'react-router-dom';
import './App.css';
import ToDo from './components/ToDo/ToDo';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Login from './components/shared/Login';
import SignUp from './components/shared/SignUp';


function App() {
  return (
    <section>
      <Routes>
        <Route path='/' element={<ToDo></ToDo>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </section>
  );
}

export default App;
