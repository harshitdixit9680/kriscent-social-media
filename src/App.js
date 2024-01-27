import './App.css';
import Navbar from './Component/Navbar';
import Homepage from './Homepage';
import { Route, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginUser, setLoading } from "./features/userSlice";
import PostForm from './timeline/Post/PostForm';
import Timeline from './timeline/Timeline';
import Createpost from './timeline/Post/Createpost';
import Homepageto from './Homepageto';

function App() {


const [post, setPost] = useState([]);


const createPost = (postData) => {
  // Add logic here to handle the creation of the post
  // This is a simple example, replace it with your actual implementation

  // Assuming you have a server/API to handle the post creation with an image
  // You may need to use FormData to handle file uploads
  const formData = new FormData();
  formData.append('description', postData.description);
  // formData.append('likes', postData.likes);
  formData.append('postImage', postData.postImage);

  // For simplicity, we'll just update the local state with the new post
  const newPost = { ...postData, imageUrl: URL.createObjectURL(postData.postImage) };
  setPost([newPost, ...post]);
};

  return (
  <>
   {/* <PostForm /> */}
  
  <Routes >
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/createpost" element={<Homepageto/>} />
       
        
      </Routes>

      
  </>
  );
}

export default App;
