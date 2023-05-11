
import { useState } from "react";
import Header from "../../../components/Header";
import Axios from "axios";

function Uploadanime() {

      const [title,setTitle] = useState("");
      const [disc,setDisc] = useState("");

      const [file1, setFile1] = useState(null); // define state for first selected file
      const [file2, setFile2] = useState(null); // define state for second selected file

      const handleFile1InputChange = (e) => {
      setFile1(e.target.files[0]); // update state with selected file
      };

      const handleFile2InputChange = (e) => {
      setFile2(e.target.files[0]); // update state with selected file
      };

      const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file1', file1);
      formData.append('file2', file2);
      Axios.post('http://localhost:3001/uploadanimeimg', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
      })
            .then((res) => {
                  
                  const img1 = res.data.file1Name
                  const img2 = res.data.file2Name
                  
                  console.log(res)

                  Axios.post("http://localhost:3001/createanime", {title,disc,img1,img2})
                  .then((response) => {
                        

                        console.log(response.data);
                        if (response.data.ok == 1) {
                              document.getElementById("alertsucciffule").style.transform = "translateY(0px)";
                              document.getElementById("alertsucciffule").style.display = "block";

                              document.getElementById("alerterror").style.transform = "translateY(-100px)";
                              document.getElementById("alerterror").style.display = "none";

                              document.getElementById("mssgsuff").innerHTML = response.data.mssg;

                              setTimeout(() => {
                                  window.location.href = "/Profile/Console";
                              }, 1000);


                        }
                        else {
                              document.getElementById("alertsucciffule").style.transform = "translateY(-100px)";
                              document.getElementById("alertsucciffule").style.display = "none";

                              document.getElementById("alerterror").style.transform = "translateY(0px)";
                              document.getElementById("alerterror").style.display = "block";
                              document.getElementById("mssgderror").innerHTML = response.data.mssg;
                        }
                  })

            })
            .catch(err => console.error(err));
      };
   
   return ( 

      <>
      <Header />
      
         <div className="flex justify-center">
                              <article className="mt-20 absolute w-full h-full text-center">

                        <div id="alertsucciffule" className="duration-300 hidden" style={{transform: "translateY(-100px)"}}>
                              <div className="alert alert-success shadow-lg">
                              <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              <span id="mssgsuff" >Your Anime has been confirmed!</span>
                              </div>
                              </div>
                        </div>

                        <div id="alerterror" className=" duration-300 hidden" style={{transform: "translateY(-100px)"}}>

                              <div className="alert alert-error shadow-lg">
                              <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              <span id="mssgderror">Error! Task failed successfully.</span>
                              </div>
                              </div>

                        </div>

                        <h1 className="text-center text-xl text-green-400  bg-green-500/20 rounded-lg m-5 p-5">New Anime?</h1>
                        <form onSubmit={handleSubmit}>


                              <div className="inline-grid ">
                                    <input className="input text-center" type="text" placeholder="Anime Title" required onChange={(e) => {setTitle(e.target.value)}}/>
                                    <textarea className="textarea mt-5" placeholder="anime Discription" required onChange={(e) => {setDisc(e.target.value)}}></textarea>

                                    <div className="flex">
                                          <label>
                                          <span className="p-5">Anime Image Origine : </span>
                                          <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs mt-5" onChange={handleFile1InputChange} required/>
                                          </label>
                                          <label>
                                          <span className="p-5">Anime Background Image Origine : </span>
                                          <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs mt-5" onChange={handleFile2InputChange} required/>
                                          </label>
                                    </div>

                                    <div className="flex justify-around mt-10">
                                    <input className="input bg-green-500 text-black cursor-pointer btn hover:bg-green-500/70" type="submit" value="Upload Anime" />
                                    <input className="input bg-red-600 text-black cursor-pointer btn hover:bg-red-500/70" type="reset" />
                                    </div>

                              </div>

                        </form>
                        </article>
         </div>
      </>
    );
}

export default Uploadanime;