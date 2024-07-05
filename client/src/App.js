
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import AdminHome from './pages/Admin/AdminHome';
import AdminEmployeeManage from './pages/Admin/AdminEmployeeManage';
import AdminEmployeeDetails from './pages/Admin/AdminEmployeeDetails';
import AdminProjectTasks from './pages/Admin/AdminProjectTasks';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element ={<Home />} lazy={true} />
      <Route path='/login' element={<Home />} />
      <Route path='admin' element={<AdminHome />} />        
      <Route path='adminEmployeeDetails' element={<AdminEmployeeDetails />} />
       <Route path='adminProjectsTask' element={<AdminProjectTasks />} />
      <Route path='adminManage' element={<AdminEmployeeManage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
