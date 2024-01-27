// components/PostForm.js
import React, { useState } from 'react';
import "../Post/postform.css";

const PostForm = ({ onSubmit }) => {
  const [description, setdescription] = useState('');
//   const [likes, setlikes] = useState('');
  const [postImage, setpostImage] = useState(null);

  const handlepostImageChange = (e) => {
    const file = e.target.files[0];
    setpostImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Assuming onSubmit is a prop function passed from parent component
    // It should handle the creation of the post, including the postImage.
    onSubmit({ description, postImage });

    // Clear form fields after submission
    setdescription('');
   
    setpostImage(null);
  };


  
  return (
    <form className='form-set' onSubmit={handleSubmit}>
      <label>
        description:
        <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} required />
      </label>
      <br />
      {/* <label>
        likes:
        <textarea value={likes} onChange={(e) => setlikes(e.target.value)} required />
      </label> */}
      <br />
      <label>
        postImage:
        <input type="file" accept="postImage/*" onChange={handlepostImageChange} />
      </label>
      <br />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
