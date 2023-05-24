import { Link } from 'react-router-dom';
import LOGO from '../../public/burgeranime.png';
function Header_null() {
   
   return ( 
      <header className='fixed w-full z-10 '>
         <div className="navbar  bg-[#46393969]">
               <div className="navbar-start">
                  <div className="dropdown">
                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                     </label>
                     <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
                  <Link to='/Register' className="btn bg-yellow-500 text-slate-950 hover:bg-white " >Get started </Link>
                  
                  
                  

               </div>
            </div>
      </header>
    );
}

export default Header_null;