import React from 'react';
import '../styles/Detail.css';
import commentIcon from '../Images/Union.png';
import Modal from '../components/Modal';
import getDate from '../components/getDate';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Detail = () => {

    //글목록에서 넘겨받은 글 id로 해당 글 객체 찾기
    const location = useLocation();
    const postId = location.state.id;
    const postList = JSON.parse(window.localStorage.getItem('postList'));
    let selectedPost;
    postList.map((e)=>{if(e.id == postId) selectedPost = e});

    //모달창 열고 닫힘 여부
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {setModalOpen(true);};
    const closeModal = () => {setModalOpen(false);};

    //input : 댓글, commentCnt : 댓글 개수 useState 초깃값으로 글목록의 댓글 갯수
    const [input,setInput] = useState('');
    const [commentCnt,setCommentCnt] = useState(selectedPost.commentCnt);

    const handleComment = (e) =>{setInput(e.target.value)};

    //조건 검사, 댓글의 id는 글과 동일하게 설정하여 commentList에 추가!
    const handleSubmit = ()=>{
        if(input.length !== 0){
            let cmt = {};
            cmt.id = postId;
            cmt.comment = input;
            cmt.date = getDate();
            let commentList = JSON.parse(window.localStorage.getItem('commentList'));
            commentList.push(cmt);
            let strCommentList = JSON.stringify(commentList);
            window.localStorage.setItem('commentList',strCommentList);
        }
        else alert('양식을 채워주시길 바랍니다!');
    }

    //getCommentList : commentList에서 현재 글과 같은 id를 가진 댓글 목록
    let getCommentList = [];
    JSON.parse(window.localStorage.getItem('commentList')).map((e)=>{
        if(e.id == postId){
            getCommentList.push(e);                                                                                                                                               
        }
    })

    //글의 댓글에 변경이 생기면 setCommetCnt로 댓글수 변경 및 postList에 최신화
    useEffect(()=>{
        setCommentCnt(getCommentList.length);
        let postList = JSON.parse(window.localStorage.getItem('postList'));
        let index = postList.findIndex((e)=>(e.id == postId));
        postList[index].commentCnt = commentCnt;
        let strPostList = JSON.stringify(postList);
        window.localStorage.setItem('postList',strPostList);
    },[getCommentList])

    return (
        <>
            <div className='detailContainer'>
                <div className='detailHeader'>
                    <button className='modifyBtn' onClick={openModal}>수정/삭제</button>
                    {/* //모달창  */}
                    <Modal open={modalOpen} close={closeModal} header="수정 / 삭제" postId = {postId}></Modal>
                    <div className='detailDate'>{selectedPost.date}</div>
                    <div className='detailTitle'>{selectedPost.title}</div>
                </div>
                <div className='detailQuestion'>{selectedPost.question}</div>
                <div className='commentCount'><img src = {commentIcon}/>{commentCnt}</div>
                <div className='commentContainer'>
                    {
                        getCommentList.map((e)=>{
                            return(
                                <div className='commentBox'>
                                    <div>{e.date}</div>
                                    <div>{e.comment}</div>
                                </div>
                            )})
                    }
                </div>
            </div>
            <div className='detailComment'>
                <input 
                    type = 'text' 
                    className='detailInput'
                    placeholder='오늘만큼은 당신도 해결사!'
                    onChange={handleComment}
                    ></input>
                <button className='detailBtn' onClick={handleSubmit}>입력</button>
            </div>
        </>
    );
};

export default Detail;
