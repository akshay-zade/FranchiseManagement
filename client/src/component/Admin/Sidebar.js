import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const nav=useNavigate();

    const [value,setValue]= useState(true);
  return (
    <aside className="w-64 bg-white shadow-md h-100 mt-1 ">
  <div className="p-4">
    <ul className="list-unstyled">
      <li><a  onClick={()=>nav("/admin")} className="d-block py-2 px-4 text-dark text-decoration-none hover-bg-gray-200 rounded sidebar-style">Dashboard</a></li>
      <li><a  onClick={()=>nav("/adminManage")} className="d-block py-2 px-4 text-dark text-decoration-none text-gray-700 hover-bg-gray-200 rounded sidebar-style">Manage Employees</a></li>
      <li><a  onClick={()=>nav("/adminEmployeeDetails")} className="d-block py-2 text-dark text-decoration-none px-4 text-gray-700 hover-bg-gray-200 rounded sidebar-style">Employee Details</a></li>
     
    </ul>
  </div>
</aside>

  )
}

export default Sidebar