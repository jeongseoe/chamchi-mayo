import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Reply = () => {
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [body, setBody] = useState("");
    const [replies, setReplies] = useState(null); //서버에서 받아온 데이터
    const [editBody, setEditBody] = useState({
            body: "",
        });
    const handlerChangeInput = (e, setState) => setState(e.target.value);

    const handlerSubmit = async(e) => {
        e.preventDefault();
        const URL = 'http://localhost:5001/reply';
        const data = {
            "name":name,
            "body":body,
            "password":password
        };
        const res = await axios.post(URL, data);
        setPassword('');
        setName('');
        setBody('');
    };

    console.log(replies);

    const fetchReply = async () => {
        const URL = 'http://localhost:5001/reply';
        const response = await axios.get(URL);
        setReplies(response.data)
    }

    useEffect(()=>{
        fetchReply();
    },[name, body, password])

    const handlerEdit = async (id, edit) => {
        const {data} = await axios.patch(`http://localhost:3001/reply/${id}`, edit);
        setReplies(data)
    }

    const handlerDelete = (replyId) => {
        axios.delete(`http://localhost:3001/reply/${replyId}`);
    }    
    console.log(name, body, password)

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="이름"
                    value = {name}
                    onChange={(e) => handlerChangeInput(e, setName)}
                />
                <input
                    type="text"
                    name="body"
                    placeholder="댓글"
                    value = {body}
                    onChange={(e) => handlerChangeInput(e, setBody)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value = {password}
                    onChange={(e) => handlerChangeInput(e, setPassword)}
                />
                <button type="submit"
                >등록하기</button>
            </form>

            <div>
                {replies && replies.map(reply => {
                    console.log(replies)
                    return <div key={reply.id}>
                        <div>이름 :{reply.name} 댓글 :{reply.body}</div>
                        <input 
                        type="text"
                        placeholder="댓글수정"
                        onChange={(e)=> setEditBody({...editBody, body:e.target.value})}
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