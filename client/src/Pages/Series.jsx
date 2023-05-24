import { useParams , Link } from 'react-router-dom';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from "../components/Footer";
const Series = () => {
  const { id } = useParams();
  const [serie, setSerie] = useState({});
  const [eps, setEps] = useState([]);
  const [ok, setOk] = useState(0);
  const [ok1, setOk1] = useState(0);

  useEffect(() => {
    Axios.get(`http://localhost:3001/getseries?serieID=${id}`)
      .then((res) => {
        const { anime } = res.data;
        setSerie(anime);
        setEps(anime.eps);
        setOk(1);
        if (serie) {
          setOk1(1);
        }

        console.log(anime);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <div className='flex justify-center'>
        <article className='mt-16  w-full h-full block m-auto items-center'>
          <div
            className='w-full h-80 m-auto bg-blur bg-cover bg-center backdrop-filter: blur(8px); bg-no-repeat'
            style={{
              backgroundImage: `url(http://localhost:3001/catalog/uploads/${
                !serie ? '1683653385343-999858805.png' : serie.img2
              })`,
            }}
          >
            <div id='bgopacity' className='w-full h-80 m-auto bg-blur bg-cover bg-center backdrop-filter: blur(8px); bg-no-repeat'></div>
          </div>

          <div className='mt-5 w-full h-full flex justify-around'>
            <div className='w-1/2 h-full'>
              <div className='m-10'>
                <h1 className='text-gray-100 text-3xl font-bold'>{serie.title}</h1>
                <p>Sub | Dub</p>
              </div>
              <div className='m-10'>
                <p>{serie.disc}</p>
              </div>

              <div>
                <p className='font-bold text-xl p-5'>Session 1 : {serie && serie.title}</p>
              </div>
              
              {eps.length <= 1 
              ? 
                   ( <p>No Episodes Available</p>) 
                    : 
                    (
                          Object.keys(eps).slice(1).map((key) => (
                          <Link to={`/watch/${id}/${eps[key]._id}`}  key={eps[key]._id} className='  inline-flex m-5'>
                          <div className='w-[17em] h-[12em]  bg-slate-100 '>
                            <div className='w-full h-[10em]  bg-cover bg-center' 
                            style={{background : `url(http://localhost:3001/catalog/uploads/eps/${eps[key].epsimage})` , backgroundSize: "cover" , backgroundPosition : "center"}}>
                              <div className='w-full h-full duration-300 hover:bg-opacity-50 hover:bg-black'></div>
                            </div>
                            <div className='w-full h-[2em]  text-center text-black font-bold'>
                               {eps[key].nbrps} - <span className='text-xs'>{eps[key].title}</span>
                            </div>
                          </div> 
                          </Link>
                          ))
                    )
              }

            </div>

            <div
              className=' float-right w-96 h-60 bg-cover bg-center m-10'
              style={{
                backgroundImage: `url(http://localhost:3001/catalog/uploads/${
                  !serie ? '1683653385343-999858805.png' : (serie.eps && serie.eps.length !== 1 ? "/eps/" + serie.eps[1].epsimage : serie.img1)

                })`,
              }}
            ></div>
          </div>
          
        </article>


       
      
        
      </div>
      <Footer />
    </>
  );
};

export default Series;
