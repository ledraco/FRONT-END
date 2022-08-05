import React from 'react';
import Modal from '../Modal';
import commentIcon from '../../Images/Union.png';
import { useState } from 'react';

const DetailContent = ({postId,selectedPost,commentCnt}) => {

    //모달창 열고 닫힘 여부
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {setModalOpen(true);};
    const closeModal = () => {setModalOpen(false);};

    return (
        <>
            <div className='detailHeader'>
                <button className='modifyBtn' onClick={openModal}>수정/삭제</button>
                {/* //모달창  */}
                <Modal open={modalOpen} close={closeModal} header="수정 / 삭제" postId = {postId}></Modal>
                <div className='detailDate'>{selectedPost.date}</div>
                <div className='detailTitle'>{selectedPost.title}</div>
            </div>
            <div className='detailQuestion'>{selectedPost.question}</div>
            <div className='commentCount'><img src = {commentIcon}/>{commentCnt}</div>
        </>
    );
};

export default DetailContent;