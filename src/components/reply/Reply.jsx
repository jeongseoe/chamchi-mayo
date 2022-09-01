import React, { useState } from "react";
import { useEffect, } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Reply = () => {
  const params = useParams();
  const id = params.id;
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [replies, setReplies] = useState([]); //서버에서 받아온 데이터
  const [editBody, setEditBody] = useState({ body: "", });
  const handlerChangeInput = (e, setState) => setState(e.target.value);
  
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const URL = `http://localhost:5001/reply`;
    const data = {
      "id": replies ? replies.length : 0,
      "name": name,
      "body": body,
      "password": password
    };

    const afterInsertReplies = replies.concat(data);
    setReplies(afterInsertReplies);

    await axios.patch(URL, { "replies": afterInsertReplies }).catch(error => error);

    setPassword('');
    setName('');
    setBody('');
  };

  // only mounted
  useEffect(() => {
    const source = axios.CancelToken.source();
    const URL = `http://localhost:5001/reply`;

    const fetchReply = async () => {
      try {
        const res = await axios.get(URL, {
          CancelToken: source.token,
        });
        console.log(res.data[id]);
        setReplies(res.data[id]);
      } catch (error) {
        if (axios.isCancel(error)) {
        } else {
          throw error;
        }        
      }
    };

    fetchReply();

    return () => source.cancel();
  }, []);

  const handlerEdit = async (replyId) => {
    const afterUpdateReplies = replies.map(reply => reply.id === replyId ? { ...reply, body: editBody } : reply);

    setReplies(afterUpdateReplies);
  };

  const handlerDelete = async (replyId) => {
    const afterDeleteReplies = replies.filter(reply => reply.id !== replyId);

    setReplies(afterDeleteReplies);
  };

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={name}
          onChange={(e) => handlerChangeInput(e, setName)}
        />
        <input
          type="text"
          name="body"
          placeholder="댓글"
          value={body}
          onChange={(e) => handlerChangeInput(e, setBody)}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => handlerChangeInput(e, setPassword)}
        />
        <button type="submit"
        >등록하기</button>
      </form>

      <div>
        {replies && replies.map(reply => {
          return <div key={reply.id}>
            <div>{reply.id}이름 :{reply.name} 댓글 :{reply.body}</div>
            <input
              type="text"
              placeholder="댓글수정"
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button
              type="button"
              onClick={() => handlerEdit(reply.id, editBody)}
            >수정</button>
            <button
              type="button"
              onClick={() => handlerDelete(reply.id)}
            >삭제</button>
          </div>
        })}
      </div>
    </>
  );
};

export default Reply;