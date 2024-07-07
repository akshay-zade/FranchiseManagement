import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
  <div className="container">
    <a className="navbar-brand text-gray-800 fs-4 fw-bold" href="/admin">Task Manager</a>
    <div className="collapse navbar-collapse justify-content-end">
      <button className="btn btn-danger font-bold  rounded btn-style">
        Logout
      </button>
    </div>
  </div>
</nav>
  )
}

export default Navbar