import React from 'react';

const CommentInput = ({handleComment,handleSubmit}) => {
    return (
        <div className='detailComment'>
            <input 
                type = 'text' 
                className='detailInput'
                placeholder='댓글을 달아주세요!!!'
                onChange={handleComment}
                ></input>
            <button className='detailBtn' onClick={handleSubmit}>입력</button>
        </div>
    );
};

export default CommentInput;