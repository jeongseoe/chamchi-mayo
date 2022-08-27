import { useEffect, useState } from "react";
import axios from "axios";

/**
 * 
 * @param {*} postId: `/posts`에 대해선 null값 지정(정서님)
 * @param {*} boolean: `/posts`에 대해선 true입니다(정서님)
 * posts가 맞냐 아니냐로 구분하겠습니다.
 * 예를 들어, `/posts/1`과 같은 경우, 하나(단수형)의 post만 요청하기 때문에 false입니다.
 * `/posts`의 경우는 여러개(복수형)의 post를 요청하기 때문에 `posts`가 맞습니다. 따라서 true입니다.
 */
const useFetchPosts = (postId, boolean) => {
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const URL = boolean ? `http://localhost:5001/posts` : `http://localhost:5001/posts/${postId}`;
    const response = await axios.get(URL).catch(error => console.log(error));
    
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);  

  return posts;
}

export default useFetchPosts;