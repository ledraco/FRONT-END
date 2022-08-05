import React from 'react';
import '../styles/Detail.css';
import commentIcon from '../Images/Union.png';
import getDate from '../components/getDate';
import CommentInput from '../components/Comment/CommentInput'
import CommentBox from '../components/Comment/CommentBox';
import ReplyForm from '../components/Reply/ReplyForm';
import DetailContent from '../components/Detail/DetailContent';
import ReplyList from '../components/Reply/ReplyList';
import { useState, useEffect } from 'react';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';

const Detail = () => {

    //글목록에서 넘겨받은 글 id로 해당 글 객체 찾기
    const location = useLocation();
    const postId = location.state.id;
    const postList = JSON.parse(window.localStorage.getItem('postList'));
    let selectedPost;
    postList.map((e)=>{if(e.id == postId) selectedPost = e});

    //input : 댓글, commentCnt : 댓글 개수 useState 초깃값으로 글목록의 댓글 갯수
    const [input,setInput] = useState('');
    const [commentCnt,setCommentCnt] = useState(selectedPost.commentCnt);

    const handleComment = (e) =>{setInput(e.target.value)};

    //조건 검사, 댓글의 id는 글과 동일하게 설정하여 commentList에 추가!
    const handleSubmit = ()=>{
        if(input.length !== 0){
            let cmt = {};
            cmt.id = postId;
            cmt.commentId = Date.now();
            cmt.comment = input;
            cmt.date = getDate();
            cmt.reply = [];
            let commentList = JSON.parse(window.localStorage.getItem('commentList'));
            commentList.push(cmt);
            let strCommentList = JSON.stringify(commentList);
            window.localStorage.setItem('commentList',strCommentList);
            window.location.reload();
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
        setCommentCnt(getCommentList.length + getReplyCnt());
        let postList = JSON.parse(window.localStorage.getItem('postList'));
        let index = postList.findIndex((e)=>(e.id == postId));
        postList[index].commentCnt = commentCnt;
        let strPostList = JSON.stringify(postList);
        window.localStorage.setItem('postList',strPostList);
    },[getCommentList])


    //-------------------------------------------대댓글-------------------------------------------

    //대댓글 갯수 
    const getReplyCnt = () => {
        let replyCnt = 0;
        getCommentList.map((e)=>{replyCnt += e.reply.length})
        return replyCnt;
    }

    const [reply,setReply] = useState(false);
    const [curCommentId,setCurCommentId] = useState('');
    const [replyInput,setReplyInput] = useState('');

    const handleReply = (commentId) =>{
        setReply(!reply);
        setCurCommentId(commentId);
    }
    
    const handleReplyInput = (e) =>{setReplyInput(e.target.value)}

    const submitReply= () =>{
        if(replyInput.length !== 0){
            // reple : 대댓글
            let reple = {};
            reple.comment = replyInput;
            reple.date = getDate();
            let commentList = JSON.parse(window.localStorage.getItem('commentList'));
            commentList.map((e)=>{
                if(e.id == postId && e.commentId === curCommentId){
                    e.reply.push(reple);
                }
            })
            let strCommentList = JSON.stringify(commentList);
            window.localStorage.setItem('commentList',strCommentList);
            window.location.reload();
        }
        else alert("대댓글을 작성해주시길 바랍니다!")
    }

    return (
        <>
            <div className='detailContainer'>
                <DetailContent postId = {postId} selectedPost = {selectedPost} commentCnt = {commentCnt} />
                <div className='commentContainer'>
                    {
                        getCommentList.map((e)=>{
                            return(
                                <div>
                                    <CommentBox e = {e} handleReply = {handleReply} commentIcon = {commentIcon}/>
                                    {reply === true && e.commentId == curCommentId ?<ReplyForm handleReplyInput={handleReplyInput} submitReply = {submitReply}/>: null}
                                    <ReplyList e = {e}/>
                                </div>
                            )})
                    }
                </div>
            </div>
            <CommentInput handleComment = {handleComment} handleSubmit = {handleSubmit}/>
        </>
    );
};
export default Detail;
