import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import PostForm from '../timeline/Post/PostForm';
import { Link } from "react-router-dom";
// import Posti from './components/Post';
function Timeline() {



  
  const [post, setPost] = useState([
    {
      user: "redian_",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "johndoe",
      imageUrl:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "mariussss",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      likes: 14,
      timestamp: "2d",
    },
  ]);




  // const [post, setPost] = useState([]);

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
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
        {/*  */}
        
        {/* <PostForm onSubmit={createPost} /> */}
          {post.map((post,index) => (
            <Post
            key={index}
              user={post.user}
              description={post.description}
              postImage={post.imageUrl}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
