import { Link } from 'react-router-dom';
import LOGO from '../../public/burgeranime.png';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import Axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [_, setCookie] = useCookies(['acc_tokens']);

  const handleSubmit = (e) => {
    e.preventDefault();
    const serverURL = 'http://localhost:3001';
    setError('');

    Axios.post(`${serverURL}/signin`, { email, pwd: password })
      .then((res) => {
        if (res.data.ok === 1) {
          //const { pwd, ...userWithoutPwd } = res.data.user;
          setCookie('acc_tokens', res.data.token);
          window.localStorage.setItem('token', res.data.token);
          window.location.href = '/';
          console.log(res.data);
        } else {
          setError(res.data.message || 'An error occurred. Please try again later.');
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        setError('An error occurred. Please try again later.');
      });
  };

  return (
    <>
      <div className="hero min-h-screen mt-10 absolute">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <Link to="/">
              <h1 className="text-5xl font-bold">
                <img src={LOGO} alt="Burger Anime" width={100} className="ml-auto" />
              </h1>
            </Link>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="">Email</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="email"
                  className="input input-bordered bg-[#000000ab]"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Password</span>
                </label>
                <input
                  type="password"
                  required
                  placeholder="password"
                  className="input input-bordered bg-[#000000ab]"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="link link-hover text-xs">
                    Forgot password?
                  </a>
                </label>
              </div>
              {error && <div className="text-red-500 mt-4">{error}</div>}
              <div className="form-control mt-6">
                <button className="btn text-black hover:text-white hover:bg-green-600 bg-yellow-500">Log In</button>
              </div>
            </form>
          </div>
          <div className="text-center p-10">
            <p>
              No account?{' '}
              <span className="text-yellow-500">
                <Link to="/register">Create One</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
