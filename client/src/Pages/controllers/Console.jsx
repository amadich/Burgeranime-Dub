import { Link } from "react-router-dom";


function Console() {
   return ( 
      
      <>
              
         <div className="flex justify-center">
                     <article className="absolute mt-20 w-full ">
                              <h1 className="text-center text-xl font-mono">Console Admin</h1>
                              <hr />

                                 <div className="flex justify-around mt-5">
                                    <Link to="Uploadanime"><button className="btn bg-green-500 text-black hover:bg-green-500/70">Upload Anime</button></Link>
                                    <Link to="AddEps" ><button className="btn bg-yellow-400 text-black hover:bg-yellow-400/70">ADD Episodes</button> </Link>
                                    <button className="btn bg-red-600 text-black hover:bg-red-600/70">Ban Users</button>
                                 </div>
                     </article>
         </div>
         
      </>
    );
}

export default Console;