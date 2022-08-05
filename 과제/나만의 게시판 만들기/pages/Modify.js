import React from 'react';
import '../styles/Modify.css'
import getDate from '../components/getDate';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import Title from '../components/Title';
import Preview from '../components/Preview';
import Header from '../components/Header';
import { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

const Modify = () => {

    //Detail 페이지에서 전달받은 글 id값으로 해당 글 조회
    const location = useLocation();
    const postId = location.state.id;

    //postList : 로컬 스토리지의 글 목록 
    //selectedPost : 글 id 값으로 찾은 현재 글
    const postList = JSON.parse(window.localStorage.getItem('postList'));
    let selectedPost;
    postList.map((e)=>{if(e.id == postId) selectedPost = e});

    //기존값!
    const [Selected,setSelected] = useState(selectedPost.category);
    const [title,setTitle] = useState(selectedPost.title);
    const [question,setQuestion] = useState(selectedPost.question);

    const handleSelect = (e) => {setSelected(e.target.value)};
    const handleTitle = (e) =>{setTitle(e.target.value)};
    const handleQuestion = (e) =>{setQuestion(e.target.value)};

    const navigate = useNavigate();

    //제목과 질문내용 작성 시, 해당 글 index를 찾아 변경된 정보로 수정
    const handleSubmit = ()=>{
        if(title.length !== 0 && question.length !==0){
            let post = {};
            post.id = postId;
            post.title = title;
            post.question = question;
            post.category = Selected;
            post.commentCnt = 0;
            post.date = getDate();
            // 로컬 스토리지의 글 목록 중 해당 글의 index 활용하여 글 수정
            let postList = JSON.parse(window.localStorage.getItem('postList'));
            const index = postList.findIndex((e)=>(e.id == postId))
            if(index>-1){
                postList.splice(index,1,post);
            }
            let strPostList = JSON.stringify(postList);
            window.localStorage.setItem('postList',strPostList);
            navigate('/');    
        }
        else alert('양식을 채워주시길 바랍니다!');
    }
    
    return (
        <div className='modifyContainer'>
            <Header headTitle={'글 수정하기'} handleSubmit = {handleSubmit}/>
            <div className = 'modifyContent'>
                <div className='modifyInput'>
                    <Select handleSelect = {handleSelect} Selected = {Selected}/>
                    <Title handleTitle={handleTitle} title = {title}/>
                    <TextArea handleQuestion={handleQuestion} question = {question}/>
                </div>
                <Preview date = {getDate()} title = {title} question = {question}/>
            </div>
        </div>
    );
};

export default Modify;