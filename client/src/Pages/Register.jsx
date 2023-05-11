import { Link } from 'react-router-dom';
import Registeryuzu from '../../public/assets/register-yuzu.png'
import LOGO from '../../public/burgeranime.png'
import Axios from "axios";
import { useState } from 'react';
import { useCookies } from 'react-cookie';
function Rejester() {
   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [pwd,setPwd] = useState("");

   const [_,setCookie] = useCookies(["acc_tokens"]);

   const handsubmit = (e) => {
      e.preventDefault();
      const serverURL = "http://localhost:3001";
      Axios.post(`${serverURL}/createuser`, {name,email,pwd})
      .then((res) => {
         
         if (res.data.ok != 0) {
            setCookie("acc_tokens",res.data.token);
            window.localStorage.setItem("name",res.data.name);
            window.localStorage.setItem("email",res.data.email);
            window.localStorage.setItem("token",res.data.token);
            console.log(res.data);

            window.location.href = "/";
         }

         else {
            console.log(res.data.message);
         }

      })
   }

   return ( 
      <>
  
               <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                     <div className="text-center lg:text-left ">
                        <Link to="/" ><h1 className="text-5xl font-bold "><img src={LOGO} alt="Burger Anime" width={100} className='ml-auto' /></h1> </Link>
                        
                     </div>
                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <img src={Registeryuzu} alt="" width={100} className='ml-[80%] mt-[-8%]' />
                        <div className="card-body">
                           <form onSubmit={handsubmit}>
                                    <div className="form-control">
                                       <label className="label">
                                          <span className="label-text">Username <i className='text-xs text-yellow-500'> ( Your Public Name in Burger Anime )</i></span>
                                       </label>
                                       <input type="text" required placeholder="Name" className="input input-bordered" onChange={(e) => {setName(e.target.value)}} />
                                    </div>
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
                                       <p className='text-xs text-center p-5 text-slate-500'>
                                       By creating an account you're agreeing to our Terms & Privacy Policy , and you confirm that you are at least 16 years of age.
                                       </p>
                                       <button className="btn text-black hover:text-white hover:bg-green-600 bg-yellow-500">Create Account</button>
                                    </div>
                              </form>
                        
                        </div>
                        
                        <div className='text-center p-10'>

                           <p>
                              Already have an account? <span className='text-yellow-500'>
                              <Link to="/login">LOG IN</Link>
                              </span>
                              </p>

                              </div>
                     </div>
                    
                  </div>

               

            </div>
      </>
    );
}

export default Rejester;