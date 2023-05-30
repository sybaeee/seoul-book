import { accessTokenState } from '@/redux/login.store';
import { Avatar } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

const ProfilePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(()=>{
    let token = localStorage.getItem('accessToken');
    axios.get('/api/users/loggedIn', {headers:{
      Authorization:`Bearer ${token}`
    }}).then(res=> setLoggedInUser(res.data))
    .catch(err=>console.log(err));
  }, []);

  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleUpload = async () => {
    console.log(accessToken)
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    console.log(selectedFile);

    try {
      const formData = new FormData();
      const fileName = `${uuidv4()}_${selectedFile.name}`;
      formData.append('image', selectedFile);
      formData.append('name', fileName);
      console.log(formData);
      const response = await axios.post('/api/profile-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization':`Bearer ${accessToken}`,
        },
      });
      console.log(response);

      if (response.status === 201) {
        setLoggedInUser({...loggedInUser, profileImg:response.data.profileImg});
        alert(`Image uploaded successfully. URL: ${response.data.profileImg}`);
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
    }
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <Avatar src={loggedInUser?.profileImg} alt='name'></Avatar>
      <form encType="multipart/form-data">
        <input type="file" name='file' onChange={handleFileInputChange} />
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
