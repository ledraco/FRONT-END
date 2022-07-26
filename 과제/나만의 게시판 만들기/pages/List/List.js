import React from 'react';
import './List.css';
import comment from './Union.png';
import {Link} from 'react-router-dom';

const List = () => {

    //로컬스토리지에서 글목록 가져오기
    const getPostList = window.localStorage.getItem('postList');
    const parsedPostList = JSON.parse(getPostList);
    return (
        <>
            <div className = 'listContainer'>
                <header className = 'head'>LIKELION</header>
                <div className = 'postList'>
                    {/* 글이 존재할 경우 글을 보여주고 아니면 불러올 글이 없습니다! */}
                    {(parsedPostList !== null) ? <PostList parsedPostList = {parsedPostList}/> : "불러올 글이 없습니다..."}
                </div>
            </div>
            <div className = 'postBtn'><Link to ="/Post">글 작성</Link></div>
        </>
    );
};

function PostList(props){
    return(
        <>
            {
                props.parsedPostList.map((e)=>{
                    return(
                        <div className='posting' id = {e.id}>
                            {/* Detail페이지에 글 id 넘겨주기 */}
                            <div><Link to = '/Detail' state={{id : e.id}}  className='listTitle'>{e.title}</Link></div>
                            <div className='listQuestion'>{e.question}</div>                            
                            <div className='listInfo'>
                                <div>{e.category}</div>
                                <div className='listDetail'>
                                    <div><img src = {comment}/>{e.commentCnt}</div>
                                    <div>{e.date}</div>
                                </div>
                            </div>
                        </div>
                )})
            }
        </>
    )
}
export default List;