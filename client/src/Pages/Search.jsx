import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Search() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://burgeranimeserver.vercel.app/getanimes', {
        params: {
          query: query
        }
      });

      // Filter anime based on the query
      const filteredResults = response.data.mycatalog.filter(anime => {
        const animeTitle = anime.title.toLowerCase();
        const searchQuery = query.toLowerCase();
        return animeTitle.includes(searchQuery);
      });

      setSearchResults(filteredResults);
    } catch (error) {
      console.error('Error searching anime:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16  absolute w-full h-full">
      <div className=" mx-auto m-auto w-full">
        <div className="flex items-center m-auto w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anime..."
            className="w-full py-2 px-4 rounded-l-md bg-gray-200 focus:outline-none focus:bg-white text-black"
          />
          <button
            onClick={handleSearch}
            className="py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-r-md focus:outline-none"
          >
            Search
          </button>
        </div>

        <div className="mt-8 ">
          {searchResults.map(anime => (
            <Link to={`/series/${anime._id}`}  key={anime._id}><div className="bg-[#222]  border-l rounded-lg shadow-md p-4 mb-4">
              <div className="flex items-center">
                <img
                  src={"http://localhost:3001/catalog/uploads/"+anime.img1}
                  alt={anime.title}
                  className="w-48 h-48 rounded-[1rem]"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-white">{anime.title}</h2>
                  <p className="text-gray-400">{anime.disc}</p>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
