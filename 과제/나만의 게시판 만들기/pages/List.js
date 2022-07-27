import React from 'react';
import '../styles/List.css';
import PostList from '../components/PostList';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';

const List = () => {
    
    //로컬스토리지에서 글목록 가져오기
    const postLists = JSON.parse(window.localStorage.getItem('postList'));
    
    //초기 로컬스토리지가 비어있을 경우, 글목록과 댓글목록 배열 추가
    useEffect(()=>{
        if(window.localStorage.getItem('postList') == null){
            let postArr = [];
            let commentArr = [];
            const postObj = JSON.stringify(postArr);
            const commentObj = JSON.stringify(commentArr);
            window.localStorage.setItem('postList',postObj);
            window.localStorage.setItem('commentList',commentObj);
            }
    },[]);

    return (
        <>
            <div className = 'listContainer'>
                <header className = 'head'>LIKELION</header>
                <div className = 'postList'>
                    {(postLists !== null) ? <PostList postLists = {postLists}/> : null}
                </div>
            </div>
            <div className = 'postBtn'><Link to ="/Post">글 작성</Link></div>
        </>
    );
};

export default List;