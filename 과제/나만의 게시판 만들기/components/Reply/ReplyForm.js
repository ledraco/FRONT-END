import React from 'react';

const ReplyForm = ({handleReplyInput,submitReply}) => {
    return (
        <div className='replytInputBox'>
            <input 
                type = 'text'
                className='replyInput' 
                placeholder='대댓글을 달아주세요!!!'
                onChange={handleReplyInput}
            ></input>
            <button className='replyInputBtn' onClick={submitReply}>입력</button>            
        </div>
    );
};

export default ReplyForm;