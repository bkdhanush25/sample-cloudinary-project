import React, { useState } from "react";
import axios from "axios";
import { DNA } from "react-loader-spinner";

const Upload = () => {

  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadFile = async(type) => {
    const data= new FormData();
    data.append("file", type==='image'?img:video);
    data.append("upload_preset",type === 'image' ? 'sample-cloudinary-images-preset':'sample-cloudinary-videos-preset');
    try{
      let cloudName =process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
      let resourceType = type === 'image' ? 'image' : 'video';
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const {secure_url} = res.data;
      console.log(secure_url);
      return secure_url;
    }catch(err){
      console.log(err);
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      setLoading(true);
      const imgUrl = await uploadFile('image');
      const videoUrl = await uploadFile('video');
      // await Axios.post("/api/videos",{imgUrl, videoUrl});
      setImg(null);
      setVideo(null);
      console.log("File Upload Sucessful");
      setLoading(false);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="video">Video:</label>
          <br />
          <input
            type="file"
            accept="video/*"
            id="video"
            onChange={(e) => setVideo((prev) => e.target.files[0])}
          />
        </div>
        <div>
          <label htmlFor="img">Image:</label>
          <br />
          <input
            type="file"
            accept="image/*"
            id="img"
            onChange={(e) =>
              setImg((prev) => e.target.files[0])
            }
          />
        </div>
        <br />
        <button type="submit">Upload</button>
      </form>
      {loading && <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />}
    </div>
  );
};

export default Upload;
