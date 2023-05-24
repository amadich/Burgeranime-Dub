import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/main.css'
import Axios from 'axios';
function Article() {
   
   const [animes, setAnimes] = useState([]);

   useEffect(() => {
      Axios.get("http://localhost:3001/getanimes")
        .then((res) => {
          setAnimes(res.data.mycatalog); // Assuming `catalog` is the property containing the array
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    

   useEffect(() => {
   //console.log(animes); // Log the updated state whenever `animes` changes
   }, [animes]);



   

   return ( 
      <>
                  
               <article>

                     <div className='m-5' id='tagdate'>
                        <h1 className='text-gray-100 font-bold text-3xl'>April 2023 Seasonal Sampler</h1>
                        <p className='text-yellow-600 font-bold mt-1'>Watch the first three episodes of these April 2023 simulcasts for free!</p>
                     </div>

                     <div className="footscrol"></div>

                     <div className='inline-flex  p-10' id='boxanimes'>

                        {
                           animes.map((anime) => {
                              return(
                                 <Link to={`/series/${anime._id}`} key={anime._id}>
                                    <div className='w-40 h-72 pt-5 duration-300 hover:bg-[#f0f7ff21] cursor-pointer ' >
                                       <div className='m-1  h-48 bg-cover' style={{backgroundImage : `url(http://localhost:3001/catalog/uploads/${anime.img1})`}}></div>
                                       <div className='m-1 '>
                                          <h4>{anime.title}</h4>
                                          <p><span className='text-cyan-500'>Series</span> ♠ Sub | Dub</p>
                                       </div>
                                    </div>

                                 </Link>
                                 
                              )
                           })
                        }

                        

                     </div>

               </article>
      </>
    );
}

export default Article;