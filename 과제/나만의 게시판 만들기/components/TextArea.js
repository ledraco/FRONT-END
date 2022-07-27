import React from 'react';

// 질문 내용
const TextArea = ({handleQuestion, placeholder, question}) => {
    return (
        <textarea
            type = 'textArea' 
            className = 'postQuestion'
            onChange = {handleQuestion}
            value = {question}
            placeholder= {placeholder}/>
    );
};

export default TextArea;