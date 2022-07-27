import React from 'react';
import comment from '../Images/Union.png';
import { Link } from 'react-router-dom';

//로컬 스토리지의 글 목록을 인자로 받아 출력하는 컴포넌트
const PostList = (props) => {
    return (
        <>
            {
                props.postLists.map((e)=>{
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
    );
};
export default PostList;