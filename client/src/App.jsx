import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Pages/Main';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { useCookies } from 'react-cookie';
import Profile from './Pages/Profile';
import Uploadanime from './Pages/controllers/Components/Uploadanime';
import Series from './Pages/Series';
import AddEps from './Pages/controllers/Components/AddEps';
import Console from './Pages/controllers/Console';
import jwtDecode from 'jwt-decode';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Header_null from './components/Header_null';

function App() {
  const [cookie, setCookie] = useCookies(['acc_tokens']);
  const [user, setUser] = useState(null);
  const [rank , setRank] = useState(0);

  

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      setCookie('acc_tokens', token);
      const decodedToken = jwtDecode(token);
      setUser(decodedToken.User);
      console.log(decodedToken.User);

        if (decodedToken.User.ranks.admin == 1) {
          setRank(1);
        }

        else{
          setRank(0);
        }

    } else {
      setCookie('acc_tokens', '');
    }
  }, []);

  return (
    <>
      <Router>
         {user && <Header user={user} />}
         {user == null ? <Header_null /> : null}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {user && <Route path="/Profile" element={<Profile user={user} />} />}
          {rank == 1 ? <Route path="/Profile/Console" element={<Console />} /> :  null }
          {rank == 1 ? <Route path="/Profile/Console/Uploadanime" element={<Uploadanime />} /> : null}
          {rank == 1 ? <Route path="/Profile/Console/AddEps" element={<AddEps />} /> : null}
          <Route path="/series/:id" element={<Series />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
