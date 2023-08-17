import React, { useState, useEffect } from "react";

function UploadImage() {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch('http://localhost:5000/images')
      const data = await response.json();
      setImages(data);
    }
    fetchImages();
  }, []);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);
    console.log('Clicked');

    await fetch('http://localhost.3000/upload', {
      method: 'POST',
      body: formData
    });

    const response = await fetch('http://localhost:3000/images');
    const data = await response.json();
    setImages(data);
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      {images.map(image => (
        <img key={image._id} src={`data:${image.img.contentType};base64,${Buffer.from(image.img.data).toString('base64')}`} alt="from db" />
      ))}
    </div>
  );
}

export default UploadImage
