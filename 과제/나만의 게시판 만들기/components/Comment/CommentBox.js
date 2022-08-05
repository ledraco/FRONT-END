import React from 'react';

const CommentBox = ({e,handleReply,commentIcon}) => {
    return (
        <div className='commentBox'>
            <div className = 'commentItem'>
                <div>{e.date}</div>
                <div onClick={()=>{handleReply(e.commentId)}}><img src={commentIcon}/></div>
            </div>
            <div>{e.comment}</div>
        </div>
    );
};

export default CommentBox;