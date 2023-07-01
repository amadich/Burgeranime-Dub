import { Link } from 'react-router-dom';
import LOGO from '../../public/burgeranime.png';
import Transparency from '../../public/assets/transparency.png';
import {useCookies} from 'react-cookie';
function Header({ user }) {
   const [cookie,setCookie] = useCookies(['acc_tokens']);
   const storedUser = user; //JSON.parse(window.localStorage.getItem("User"));
   const Avatar = `https://burgeranimeserver.vercel.app/catalog/uploads/avatars/${user.avatar}?${Date.now()}`;

      
   const removeStorageCookie = () => {
      
      setCookie("acc_tokens" , "");
      window.localStorage.removeItem("token");
      /*
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("User");
      window.localStorage.removeItem("userID");
      */
      window.location.href = '/login';
      
   }
   return ( 
      <header className='fixed w-full z-10'>
         <div className="navbar  bg-[#222]">
               <div className="navbar-start">
                  <div className="dropdown ">
                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                     </label>
                     <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#222] rounded-box w-52">
                     <li><a>Animes</a></li>
                     <li tabIndex={0}>
                        <a className="justify-between">
                           Browse
                           <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-zinc-800">
                           <li><a>Action</a></li>
                           <li><a>Drama</a></li>
                        </ul>
                     </li>
                     <li><a>Manga</a></li>
                     </ul>
                  </div>
                  <Link to="/" className="btn btn-ghost normal-case text-xl">
                     <img src={LOGO} alt="Logo Burger Anime"  width={50}/>
                  </Link>
                  <Link to="/search" className="btn btn-ghost normal-case text-xl">
                     <img src={Transparency} alt="Logo Burger Anime"  width={30}/>
                  </Link>
                  
               </div>
               <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                     <li><a>Animes</a></li>
                     <li tabIndex={0}>
                     <a>
                        Browse
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                     </a>
                     <ul className="p-2 bg-zinc-800">
                        <li><a>Action</a></li>
                        <li><a>Drama</a></li>
                     </ul>
                     </li>
                     <li><a>Manga</a></li>
                  </ul>
               </div>
               <div className="navbar-end">
                  <Link to='/Register' className="btn bg-yellow-500 text-slate-950 hover:bg-white pt-4" style={!cookie.acc_tokens ? {display: 'block'} : {display: "none"}} >Get started </Link>
                  <span>{cookie.acc_tokens ? user.name : null }</span>
                  
                  <div className='dropdown dropdown-end '>
                    
                    
                     <div tabIndex={0} className=' w-10 h-10  rounded-xl ml-5 bg-cover cursor-pointer hover:bg-[#10d8ff29]' style={!cookie.acc_tokens ? {display: "none"} :  window.localStorage.getItem("avatar") != "" ? {display: "block" , backgroundImage: `url(${Avatar})`} : {display: "block" , backgroundImage: `url(${Avatar})`} } ></div>

                     <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-[#46393969] rounded-box w-52">
                        <li>
                           <Link to="/Profile" className="justify-between">
                              Profile
                              <span className="badge">New</span>
                           </Link>
                        </li>
                        {
                           cookie.acc_tokens ? user.ranks.admin == 1 ? <li className='bg-blue-500/70 hover:bg-blue-500/100 text-black rounded-lg'><Link to="/Profile/Console">Console Admin</Link></li> : null : null
                        }
                        <li><a>Settings</a></li>
                        <li onClick={removeStorageCookie}><a>Logout</a></li>
                     </ul>

                  </div>

               </div>
            </div>
      </header>
    );
}

export default Header;