import Main from "./Pages/Main";
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import './App.css'
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { useCookies } from "react-cookie";
import Profile from "./Pages/Profile";

import Uploadanime from "./Pages/controllers/Components/Uploadanime";
import Series from "./Pages/Series";
import AddEps from "./Pages/controllers/Components/AddEps";
import Console from "./Pages/controllers/Console";
function App() {
   
   const [cookie,setCookie] = useCookies(['acc_tokens']);
   window.localStorage.getItem("token") ?  setCookie("acc_tokens", window.localStorage.getItem("token")) : setCookie("acc_tokens" , ""); 
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
               <Route path="/Profile/Console/AddEps" element={<AddEps />} />

                  {/* Routes ID */}
                  <Route path="/series/:id" element={<Series />} />


            </Routes>
         </Router>
      </>
    );
}

export default App;