import React, { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Post.css';

const Post = () => {

    const [Selected,setSelected] = useState('일상');
    const [title,setTitle] = useState('');
    const [question,setQuestion] = useState('');
    
    const selectList =
    ["일상","전자공학부","건축학부","산업공학부","화학소재공학부","신소재공학부","기계공학과","기계설계공학과","기계시스템공학과",
    "토목공학과","컴퓨터공학과","컴퓨터소프트웨어공학과","인공지능공학과","광시스템공학과","메디컬IT융합공학과","환경공학과",
    "IT융합학과","수리빅데이터학과","화학생명과학과","경영학과"];

    //처음 글작성시 로컬스토리지에 빈배열인 postList와 commentList를 추가!
    useEffect(()=>{
        if(window.localStorage.getItem('postList') == null){
            let postArr = [];
            const postObj = JSON.stringify(postArr);
            window.localStorage.setItem('postList',postObj);
            let commentArr = [];
            const commentObj = JSON.stringify(commentArr);
            window.localStorage.setItem('commentList',commentObj);
        }
    },[]);

    const handleSelect = (e) => {setSelected(e.target.value)};
    const handleTitle = (e) =>{setTitle(e.target.value)};
    const handleQuestion = (e) =>{setQuestion(e.target.value)};

    const navigate = useNavigate();

    // 완료 버튼을 눌렀을 때 조건 검사 후 postList에 새로운 글을 추가
    const handleSubmit = ()=>{
        if(title.length !== 0 && question.length !==0){
            let post = {};
            post.id = Date.now();
            post.title = title;
            post.question = question;
            post.category = Selected;
            post.commentCnt = 0;
            post.date = getDate();
            let postList = JSON.parse(window.localStorage.getItem('postList'));
            postList.unshift(post);
            let strPostList = JSON.stringify(postList);
            window.localStorage.setItem('postList',strPostList);
            navigate('/');
        }
        else alert('양식을 채워주시길 바랍니다!');
    }
    
    //날짜,시간 구하기
    function getDate(){
        let getTime = new Date();
        let month = ('0' + (getTime.getMonth()+1)).slice(-2);
        let day = ('0' + getTime.getDate()).slice(-2);
        let hours = ('0' + getTime.getHours()).slice(-2);
        let minutes = ('0' + getTime.getMinutes()).slice(-2);
        let date = month + '-' + day +' '+ hours + ':' + minutes;
        return date;
    }

    return (
        <div className = 'postContainer'>
            <header className = 'postHeader'>
                <div></div>
                <div className='postTitle'>글 작성하기</div>
                <button className='postingBtn' onClick={handleSubmit}>완료</button>
            </header>
            <div className = 'postContent'>
                <select className = "select" onChange={handleSelect} value={Selected}>
                <option disabled>=== 카테고리 선택 ===</option>
                        {selectList.map((item,i) => (
                        <option value={item} key={i}>
                        {item}
                    </option>))}
                </select>
                <input type = 'text' className = 'postText' onChange = {handleTitle} placeholder='제목'></input>
                <textarea
                    type = 'textArea' 
                    className = 'postQuestion'
                    onChange = {handleQuestion}
                    placeholder='질문을 입력해주세요'/>
            </div>
        </div>
    );
};

export default Post;