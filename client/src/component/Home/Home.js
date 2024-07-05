import React from 'react'
import Login from '../LoginPage/Login'
const Home = () => {
  return (
    <div class="min-vh-100 d-flex flex-column flex-md-row">
    <section class="bg-primary text-white p-5 d-flex flex-column justify-content-center w-100 w-md-50">
      <h1 class="display-1 font-weight-bold mb-3">Hello <br/> FranchiseWorld</h1>
      <p class="mb-3">"Guide team members"</p>
    </section>
    
    <section class="text-white p-5 w-100 w-md-50">
      <Login />
    </section>
  </div>
  )
}

export default Home