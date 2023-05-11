import { Link } from "react-router-dom";
import Header from "../../components/Header";

function Console() {
   return ( 
      
      <>
               <Header />
         <div className="flex justify-center">
                     <article className="absolute mt-20 w-full ">
                              <h1 className="text-center text-xl font-mono">Console Admin</h1>
                              <hr />

                                 <div className="flex justify-around mt-5">
                                    <Link to="Uploadanime"><button className="btn bg-green-500 text-black hover:bg-green-500/70">Upload Anime</button></Link>
                                    <button className="btn bg-yellow-400 text-black hover:bg-yellow-400/70">ADD Episodes</button>
                                    <button className="btn bg-red-600 text-black hover:bg-red-600/70">Ban Users</button>
                                 </div>
                     </article>
         </div>
         
      </>
    );
}

export default Console;