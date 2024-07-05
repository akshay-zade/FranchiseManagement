import React , {useState} from 'react'

const Login = () => {

    
    const [form, setForm] = useState({
      "email": "",
      "password": "",
    });
    const [error, setError] = useState("");
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({...form, [name]: value });
    }
  
    const signInForm = async (e) => {
      e.preventDefault();
    
    }

  return (
    <div class="min-vh-100 d-flex align-items-center">
    <div class="container py-5">
      <div class="card mx-auto shadow-sm" style={{ maxWidth: '28rem' }}>
        <div class="card-body p-5">
          <h1 class="card-title text-center mb-4">Login to Your Account</h1>
          {error && <p class="text-danger text-center mb-3">{error}</p>}
          <form onSubmit={signInForm}>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="form-check">
                <input
                  type="checkbox"
                  id="remember"
                  class="form-check-input"
                />
                <label for="remember" class="form-check-label">
                  Remember me
                </label>
              </div>
              <a href="#" class="text-decoration-none">
                Forgot Password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                class="btn btn-primary w-100"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login