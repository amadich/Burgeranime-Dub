import { Link } from 'react-router-dom';
import LOGO from '../../public/burgeranime.png'
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import Axios from 'axios';

function Login() {
   

   const [email,setEmail] = useState("");
   const [pwd,setPwd] = useState("");

   const [_,setCookie] = useCookies(["acc_tokens"]);
   
   const handsubmit = (e) => {
      e.preventDefault();
      const serverURL = "http://localhost:3001";
      Axios.post(`${serverURL}/signin`, {email,pwd})
      .then((res) => {
         if (res.data.ok == 1) {
            // Exclude "pwd" property from User object
            const { pwd, ...userWithoutPwd } = res.data.User;
            setCookie("acc_tokens",res.data.token);
            window.localStorage.setItem("token",res.data.token);
            /*
            window.localStorage.setItem("User", JSON.stringify(userWithoutPwd));
            
            window.localStorage.setItem("name",res.data.User.name);
            window.localStorage.setItem("email",res.data.User.email);
            window.localStorage.setItem("userID",res.data.User._id);
            */

                  window.location.href = "/";
                  console.log(res.data);

         }

         else if (res.data.ok == 4) {
            console.log(res.data.message);
         }

         else {
            console.log(res.data.message);
         }

      })
   }
   

   return ( 
      <>
  
               <div className="hero min-h-screen bg-base-200 mt-10 absolute">
                  <div className="hero-content flex-col ">
                     <div className="text-center lg:text-left ">
                        <Link to="/" ><h1 className="text-5xl font-bold "><img src={LOGO} alt="Burger Anime" width={100} className='ml-auto' /></h1> </Link>
                        
                     </div>
                           <div className="card-body">
                           <form onSubmit={handsubmit}>
                                   
                                 <div className="form-control">
                                       <label className="label">
                                          <span className="label-text">Email</span>
                                       </label>
                                       <input type="text" required placeholder="email" className="input input-bordered" onChange={(e) => {setEmail(e.target.value)}} />
                                    </div>
                                    <div className="form-control">
                                       <label className="label">
                                          <span className="label-text">Password</span>
                                       </label>
                                       <input type="password" required placeholder="password" className="input input-bordered" onChange={(e) => {setPwd(e.target.value)}} />
                                       <label className="label">
                                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                       </label>
                                    </div>
                                    <div className="form-control mt-6">
                                       
                                       <button className="btn text-black hover:text-white hover:bg-green-600 bg-yellow-500">Log IN</button>
                                    </div>
                              </form>
                        
                        </div>
                        
                        <div className='text-center p-10'>

                           <p>
                              No account? <span className='text-yellow-500'>
                              <Link to="/register">Create One  </Link>
                              </span>
                              </p>

                              </div>
                     </div>
                    
                  </div>

         
               

            
      </>
    );
}

export default Login;