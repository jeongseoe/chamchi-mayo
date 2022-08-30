import styled from "styled-components";
import useFetchPost from "../../hooks/hook";
import List from "../post/List";

const PostTitle = styled.div`
font-size: 40px;
color:#FF0000;
text-align: center;
margin-top: 20px;
margin-bottom: 20px;
`;


const Post = () => {
    const posts = useFetchPost(null);
    console.log(posts);


    return (
        <>
            <div>
                <PostTitle>분노목록</PostTitle>
                <div>
                    {posts?.map((post) => {
                        return <List key={post.id} post={post} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Post;