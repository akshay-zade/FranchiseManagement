import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
  <div class="container">
    <a class="navbar-brand text-gray-800 font-bold" href="#">Task Manager</a>
    <div class="collapse navbar-collapse justify-content-end">
      <button class="btn btn-danger font-bold rounded">
        Logout
      </button>
    </div>
  </div>
</nav>
  )
}

export default Navbar