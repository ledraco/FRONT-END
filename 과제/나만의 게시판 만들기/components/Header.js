import React from 'react';

const Header = ({headTitle, handleSubmit}) => {
    return (
        <header className = 'postHeader'>
            <div></div>
            <div className='postTitle'>{headTitle}</div>
            <button className='postingBtn' onClick={handleSubmit}>완료</button>
        </header>
    );
};

export default Header;