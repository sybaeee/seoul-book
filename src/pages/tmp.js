import axios from 'axios';
import { useState } from 'react';

const ProfilePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    console.log(selectedFile);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      console.log(formData);
      const response = await axios.post('/api/profile-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);

      if (response.status === 200) {
        alert(`Image uploaded successfully. URL: ${response.data.url}`);
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
