import React from 'react';

//글 작성 미리보기
const Preview = ({date, title, question}) => {
    return (
        <div className='preview'>
            <button className='modifyBtn'>수정/삭제</button>
            <div className='detailDate'>{date}</div>
            <div className='detailTitle'>{title}</div>
            <div className='detailQuestion'>{question}</div>
        </div>
    );
};

export default Preview;