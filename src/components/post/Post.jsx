import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";

import useFetchPost from "../../hooks/useFetchPosts";
import List from "../post/List";

const PostTitle = styled.div`
  font-size: 40px;
  color:#FF0000;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Post = () => {
  const boxRef = useRef();
  const [page, setPage] = useState(1);
  const posts = useFetchPost(null, page); // 여기에 page 값이 제대로 반영되는지 확인해봐야...

  const onIntersect = (entries, observer) => {
    const [ entry ] = entries;

    if (entry.isIntersecting) {
      setPage(prev => prev + 1);
      console.log('지금 데이터 더 불러오삼 ㅋㅋ');
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, options);
    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    }
  }, [boxRef, options]);

  return (
    <>
      <div>
        <PostTitle>분노목록</PostTitle>
        <div>
          {posts && posts.slice(0, page * (10)).map((post) => {
            return <List ref={boxRef} key={post.id} post={post} />
          })}
        </div>
      </div>
    </>
  )
}

export default Post;