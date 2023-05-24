import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function Watch() {
  const { id, epsID } = useParams();
   const [eps,setEps] = useState(null);
   const [anime,setAnime] = useState({});
  useEffect(() => {
    Axios.get(`http://localhost:3001/geteps?serieID=${id}&epsID=${epsID}`)
      .then((res) => {
        console.log(res.data);
        setEps(res.data.episode);
        setAnime(res.data.animeSchema);
      })
      .catch((error) => {
        console.error("Error fetching eps:", error);
      });
  }, []);

  return (
   <>
   
            {console.log(eps)}

            <section className="w-full h-full absolute mt-16">


               <div className=" w-full h-[25em] ">
                     {
                        eps != null && 
                        <iframe className="w-full h-full"
                        src={  eps.epsurl }
                        title={ eps.title } 
                        allowFullScreen
                        >
                     
                     </iframe>
                     }
               </div>

               <div className=" w-full h-full p-10">
                        <div className="float-right">
                                    <Link to={`/series/${anime._id}/`}>
                                    <button className="btn bg-yellow-500 text-black hover:bg-green-600">Back To List</button>
                                    </Link>
                        </div>
                        <p className="font-bold text-xl  text-orange-400">
                           {eps != null && eps.title}  
                           <i className="m-5 text-xl text-gray-500">
                                Sub | Dub
                           </i>
                           </p>
                           <p className="text-gray-100 font-bold">
                              <span>Episode : </span>
                               {eps != null && eps.nbrps}
                           </p>

                           <p className="mt-16 w-1/2 text-gray-400">
                              <h1 className="text-gray-300 text-xl font-bold font-mono block ">Anime synopsis</h1>
                              <span className="block mt-5">
                                 {anime && anime.disc}
                              </span>
                           </p>
               </div>
               <Footer />
            </section>

            

   </>
  )
}

export default Watch;
