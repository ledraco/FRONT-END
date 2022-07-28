import React, { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import '../styles/Post.css';
import getDate from '../components/getDate';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import Title from '../components/Title';
import Preview from '../components/Preview';
import PostList from '../components/PostList';
import Header from '../components/Header';

const Post = () => {

    const [Selected,setSelected] = useState('일상');
    const [title,setTitle] = useState('');
    const [question,setQuestion] = useState('');

    const handleSelect = (e) => {setSelected(e.target.value)};
    const handleTitle = (e) =>{setTitle(e.target.value)};
    const handleQuestion = (e) =>{setQuestion(e.target.value)};

    const navigate = useNavigate();

    const postLists = JSON.parse(window.localStorage.getItem('postList'));

    // 제목과 질문내용 작성 시 postList에 새로운 글을 추가
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
            navigate('/Post');
        }
        else alert('양식을 채워주시길 바랍니다!');
    }
    
    return (
        <div className = 'postContainer'>
            <Header headTitle={'글 작성하기'} handleSubmit = {handleSubmit}/>
            <div className = 'postContent'>
                <Select handleSelect = {handleSelect} Selected = {Selected}/>
                <Title handleTitle={handleTitle} placeholder='제목'/>
                <TextArea handleQuestion={handleQuestion} placeholder='질문을 입력해주세요'/>
            </div>
            <div className = 'postList2'>
                {(postLists !== null) ? <PostList postLists = {postLists}/> : null}
            </div>
            {/* <Preview date = {getDate()} title = {title} question = {question}/> */}
            
        </div>
    );
};

export default Post;