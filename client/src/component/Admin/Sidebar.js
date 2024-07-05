import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const nav=useNavigate();

    const [value,setValue]= useState(true);
  return (
    <aside class="w-64 bg-white shadow-md h-100 mt-1 ">
  <div class="p-4">
    <ul class="list-unstyled">
      <li><a  onClick={()=>nav("/")} class="d-block py-2 px-4 text-gray-700 hover-bg-gray-200 rounded">Dashboard</a></li>
      <li><a  onClick={()=>nav("/adminManage")} class="d-block py-2 px-4 text-gray-700 hover-bg-gray-200 rounded">Manage Employees</a></li>
      <li><a  onClick={()=>nav("/adminEmployeeDetails")} class="d-block py-2 px-4 text-gray-700 hover-bg-gray-200 rounded">Employee Details</a></li>
      <li><a  onClick={()=>nav("/adminProjectsTask")} class="d-block py-2 px-4 text-gray-700 hover-bg-gray-200 rounded">Employee Project Task</a></li>
    </ul>
  </div>
</aside>

  )
}

export default Sidebar