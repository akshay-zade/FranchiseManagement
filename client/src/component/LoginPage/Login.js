import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    
    const [form, setForm] = useState({
      "email": "",
      "password": "",
    });
    const [error, setError] = useState("");
  
   
  
    const handleLogin = async (e) => {
      e.preventDefault();
      if (email && password) {
        localStorage.setItem('user', JSON.stringify({ email }));
        localStorage.setItem('Password', JSON.stringify({ password }));
        navigate('/');
      } else {
        alert('Please enter both username and password');
      }
      
    };

  return (
    <div class=" d-flex align-items-center">
    <div class="container py-5">
      <div class="card mx-auto shadow-sm" style={{ maxWidth: '28rem' }}>
        <div class="card-body p-4">
          <h1 class="card-title text-center mb-4">Login to Your Account</h1>
          {error && <p class="text-danger text-center mb-3">{error}</p>}
          <form onSubmit={handleLogin}>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                class="form-control"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                class="form-control"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
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