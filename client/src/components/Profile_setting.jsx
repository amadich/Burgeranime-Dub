import React, { useState } from 'react';
import Axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useCookies } from 'react-cookie';

function Profile_setting() {
  const [avatar, setAvatar] = useState(null);
  const [cookie, setCookie] = useCookies(['acc_tokens']);

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleAvatarUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file1', avatar);

      const token = localStorage.getItem('token');
      const decodedToken = jwtDecode(token);
      const email = decodedToken.User.email;

      formData.append('email', email);

      Axios.post('https://burgeranimeserver.vercel.app/changeavatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        console.log('Avatar uploaded and database updated successfully:', response.data);
        setCookie('acc_tokens', response.data.token);
        window.localStorage.setItem('token', response.data.token);

        setTimeout(() => {
          window.location.href = '/';
        }, 100);
      });
    } catch (error) {
      console.error('Error uploading avatar:', error);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="max-w-md px-4 py-60 bg-[whitesmoke] rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">Change Your Avatar</h2>
        <div className="mt-5">
          <input
            type="file"
            className="file-input  file-input-bordered file-input-info text-black w-full h-full"
            onChange={handleAvatarChange}
          />
        </div>
        <div className="mt-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            onClick={handleAvatarUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile_setting;
