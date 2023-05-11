import Main from "./Pages/Main";
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import './App.css'
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { useCookies } from "react-cookie";
import Profile from "./Pages/Profile";
import Console from "./Pages/controllers/console";
import Uploadanime from "./Pages/controllers/Components/Uploadanime";
import Series from "./Pages/Series";
function App() {
   const [cookie,setCookie] = useCookies(['acc_tokens']);
   cookie.acc_tokens ? setCookie("acc_tokens", window.localStorage.getItem("token")) : null 
   return ( 
      <>
         <Router>
            <Routes>
               <Route path="/" element={<Main />} />
               <Route path="/register" element={<Register />} />
               <Route path="/login" element={<Login />} />
               <Route path="/Profile" element={<Profile />} />
               <Route path="/Profile/Console" element={<Console />} />
               <Route path="/Profile/Console/Uploadanime" element={<Uploadanime />} />

                  {/* Routes ID */}
                  <Route path="/series/:id" element={<Series />} />


            </Routes>
         </Router>
      </>
    );
}

export default App;