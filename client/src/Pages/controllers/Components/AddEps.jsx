import { useEffect, useState } from "react";
import Axios from "axios";

function AddEps() {
  const [myanime, setMyanime] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState('');
  const [episodeNumber, setEpisodeNumber] = useState('');
  const [ episodeUrl  , setEpisodeUrl] = useState("");
  const [episodeImage, setEpisodeImage] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3001/getanimes")
      .then((res) => {
        console.log(res.data.mycatalog);
        setMyanime(res.data.mycatalog);
      });
  }, []);

  const handleAnimeChange = (e) => {
    setSelectedAnime(e.target.value);
  };

  const handleEpisodeNumberChange = (e) => {
    setEpisodeNumber(e.target.value);
  };

  const handleEpisodeUrlChange = (e) => {
   setEpisodeUrl(e.target.value);
  }

  const handleEpisodeImageChange = (e) => {
    setEpisodeImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedAnime || !episodeNumber || !episodeImage || !episodeUrl) {
      console.log('Please fill in all the required fields.');
      return;
    }

    const formData = new FormData();
    formData.append('file1', episodeImage);
    formData.append('title', selectedAnime);
    formData.append('nbeps', episodeNumber);
    formData.append('epsurl', episodeUrl);

    Axios.post('http://localhost:3001/addeps', formData)
      .then((res) => {
        console.log(res.data);
        // Handle the response as needed
      })
      .catch((err) => {
        console.log(err);
        // Handle the error as needed
      });
  };

  return (
    <>
      <article className="mt-20 absolute w-full h-full text-center">
        <h1 className="text-center text-xl text-yellow-400 bg-yellow-500/20 rounded-lg m-5 p-5">
          ADD EPISODES?
        </h1>

        <form onSubmit={handleSubmit}>
        <select
            className="select select-success w-full max-w-xs bg-[#222]"
            value={selectedAnime}
            onChange={handleAnimeChange}
            >
            <option disabled value="" className="text-gray-500 bg-[#222]">
               Pick your anime
            </option>
            {myanime.map((val) => (
               <option key={val._id} value={val.title}>{val.title}</option>
            ))}
         </select>




          <br />

          <div id="ttab" className={selectedAnime ? '' : 'hidden'}>
            <label>
              <span>Episode Number : </span>
              <input
                className="input mt-5 w-20 text-gray-950"
                type="number"
                required
                placeholder="Number?"
                value={episodeNumber}
                onChange={handleEpisodeNumberChange}
              />
            </label>

               <br />   
            <label>
              <span>Episode URL : </span>
              <input
                className="input mt-5 w-96 text-gray-950"
                type="text"
                required
                placeholder="Episode Video URL ..."
                value={episodeUrl}
                onChange={handleEpisodeUrlChange}
              />
            </label>

            <label className="mt-10 block">
              <span>Episode Image : </span>
              <input
                type="file"
                required
                className="file-input file-input-bordered file-input-warning w-full max-w-xs text-gray-950"
                onChange={handleEpisodeImageChange}
              />
              <span className="text-gray-500 text-xs flex items-center justify-center mt-5">
                <span className="w-1/2">
                  Get a picture of the series, watch the episode in the middle,
                  take the picture manually, record it on a desk, and upload it
                  here
                </span>
              </span>
            </label>

            <input
              type="submit"
              className="btn mt-10 bg-yellow-500 text-black hover:bg-green-600"
              value="Share Episode"
            />
          </div>
        </form>
      </article>
    </>
  );
}

export default AddEps;
