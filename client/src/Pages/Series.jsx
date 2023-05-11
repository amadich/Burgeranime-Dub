import { useParams } from 'react-router-dom';
import Axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../components/Header';
const Series = () => {
  const { id } = useParams();
  const [serie,setSerie] = useState([]);
  const [eps ,setEps] =useState({});
  useEffect(() => {
    Axios.get(`http://localhost:3001/getseries?serieID=${id}`)
   .then((res) => {
     setSerie(res.data.anime);
     setEps(res.data.anime.eps)
     console.log(res.data.anime);
   })
   .catch((err) => {
     console.log(err);
   });
 
  },[id]);

  

  return (
    <>
            <Header />

            <div className='flex justify-center'>
                     <article className='mt-16 absolute w-full h-full block m-auto items-center'>
                           <div className=' w-full h-80 m-auto bg-blur  bg-cover bg-center backdrop-filter: blur(8px); bg-no-repeat ' style={{backgroundImage: `url(http://localhost:3001/catalog/uploads/${serie.img2})`}}>
                            <div id='bgopacity' className=' w-full h-80 m-auto  bg-blur  bg-cover bg-center backdrop-filter: blur(8px); bg-no-repeat '></div>
                           </div>

                           <div className=' mt-5 w-full h-full flex justify-around '>

                                 <div className=' w-1/2 h-full'>
                                    <div className='m-10'>
                                    <h1 className='text-gray-100 text-3xl font-bold '>{serie.title}</h1>
                                    <p>Sub | Dub</p>
                                    </div>
                                    <div className='m-10'>
                                       <p>{serie.disc}</p>
                                    </div>

                                      <p>{eps.Demo}</p>

                                </div>


                                 <div className='border float-right w-96 h-60 bg-cover bg-center m-10' style={{backgroundImage: `url(http://localhost:3001/catalog/uploads/${serie.img2})`}}></div>
                                 
                           </div>

                     </article>
            </div>
    </>
  );
};

export default Series;
