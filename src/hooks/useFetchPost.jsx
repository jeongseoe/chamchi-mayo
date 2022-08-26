import { useEffect, useState } from "react";
import axios from "axios";

const useFetchPost = (props) => {
  const [post, setPost] = useState(null);

  const fetchPosts = async() => {
    const URL = `http://localhost:5001/posts/${props}`;
    const response = await axios.get(URL).catch(error => console.log(error));
    
    setPost(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);  

  return post;
}

export default useFetchPost;