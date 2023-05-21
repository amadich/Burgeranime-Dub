import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Axios from "axios";
function AddEps() {
   const [myanime , setMyanime] = useState([]);
   useEffect(() => {
      Axios.get("http://localhost:3001/getanimes")
      .then((res) => {
         console.log(res.data.mycatalog);
         setMyanime(res.data.mycatalog);
      })
   },[])

   return ( 
      <>
            <Header />
         

         <article className="mt-20 absolute w-full h-full text-center" >
                  <h1 className="text-center text-xl text-yellow-400  bg-yellow-500/20 rounded-lg m-5 p-5">ADD EPISODES?</h1>

                  <form>
                        <select className="select select-success w-full max-w-xs" defaultValue={0} >
                              <option disabled value={0} className="text-gray-500">Pick your anime</option>

                              {
                                 myanime.map((val) => {
                                    return(
                                       
                                     
                                       <option key={val._id}>{val.title}</option>
                                       

                                    )
                                 })
                              }
                              
                        </select>
                  </form>

         </article>
      </>
    );
}

export default AddEps;