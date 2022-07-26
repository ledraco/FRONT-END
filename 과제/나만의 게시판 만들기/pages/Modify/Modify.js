import React from 'react';
import './Modify.css'
import { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

const Modify = () => {
    //Detail 페이지에서 전달받은 글 id값으로 해당 글 조회
    const location = useLocation();
    const postId = location.state.id;
    const postList = JSON.parse(window.localStorage.getItem('postList'));
    let selectedPost;
    postList.map((e)=>{if(e.id == postId) selectedPost = e});


    const [Selected,setSelected] = useState(selectedPost.category);
    const [title,setTitle] = useState(selectedPost.title);
    const [question,setQuestion] = useState(selectedPost.question);

    const selectList =
    ["일상","전자공학부","건축학부","산업공학부","화학소재공학부","신소재공학부","기계공학과","기계설계공학과","기계시스템공학과",
    "토목공학과","컴퓨터공학과","컴퓨터소프트웨어공학과","인공지능공학과","광시스템공학과","메디컬IT융합공학과","환경공학과",
    "IT융합학과","수리빅데이터학과","화학생명과학과","경영학과"];

    const handleSelect = (e) => {setSelected(e.target.value)};
    const handleTitle = (e) =>{setTitle(e.target.value)};
    const handleQuestion = (e) =>{setQuestion(e.target.value)};

    const navigate = useNavigate();

    //조건 검사, 해당 글 index를 찾아 변경된 정보로 수정
    const handleSubmit = ()=>{
        if(title.length !== 0 && question.length !==0){
            let post = {};
            post.id = postId;
            post.title = title;
            post.question = question;
            post.category = Selected;
            post.commentCnt = 0;
            post.date = getDate();
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
    
    //날짜 및 시간 찾기
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
        <div className='modifyContainer'>
            <header className = 'modifyHeader'>
                <div></div>
                <div className='modifyTitle'>글 작성하기</div>
                <button className='modifyingBtn' onClick={handleSubmit}>완료</button>
            </header>
            <div className = 'modifyContent'>
                <select className = "modifySelect" onChange={handleSelect} value={Selected}>
                <option disabled>=== 카테고리 선택 ===</option>
                        {selectList.map((item,i) => (
                        <option value={item} key={i}>
                        {item}
                    </option>))}
                </select>
                <input type = 'text' className = 'modifyText' onChange = {handleTitle} value = {title}></input>
                <textarea
                    type = 'textArea' 
                    className = 'modifyQuestion'
                    onChange = {handleQuestion}
                    placeholder='질문을 입력해주세요'
                    value={question}/>
            </div>
        </div>
    );
};

export default Modify;