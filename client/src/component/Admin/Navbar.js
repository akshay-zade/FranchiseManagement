import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.clear();
 
    navigate('/login');
   
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
  <div className="container">
    <a className="navbar-brand text-gray-800 fs-4 fw-bold" href="/admin">Task Manager</a>
    <div className="collapse navbar-collapse justify-content-end">
      <button onClick={handleLogout} className="btn btn-danger font-bold  rounded btn-style">
        Logout
      </button>
    </div>
  </div>
</nav>
  )
}

export default Navbar