import styled from "@emotion/styled";
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
    const posts = useFetchPost(null);

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