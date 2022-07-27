import React from 'react';

// 질문 제목
const Title = ({handleTitle, placeholder, title}) => {
    return (
        <>
            <input 
                type = 'text' 
                className = 'postText' 
                onChange = {handleTitle} 
                value = {title}
                placeholder= {placeholder}></input>
        </>
    );
};

export default Title;