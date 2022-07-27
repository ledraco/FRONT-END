import React from 'react';
import '../styles/Modal.css';
import { Link,useNavigate} from 'react-router-dom';

const Modal = (props) => {
    // 열기, 닫기, 헤더, ID값을 부모로부터 받아옴
    const { open, close, header, postId } = props;
    const navigate = useNavigate();

    //해당 글의 index를 찾아 postList에서 삭제
    const handleRemove = () =>{
        let postList = JSON.parse(window.localStorage.getItem('postList'));
        const index = postList.findIndex((e)=>(e.id == postId))
        if(index>-1){
            postList.splice(index,1);
            let strPostList = JSON.stringify(postList);
            window.localStorage.setItem('postList',strPostList);
            navigate('/');
        }
    }
    return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
            <section>
                <header>
                    {header}
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                </header>
                <footer>
                    {/* //글 id값 넘겨주기 */}
                    <Link to = '/Modify' state={{id : postId}}><button className="close">수정</button></Link>
                    <button className="close" onClick={handleRemove}>삭제</button>
                </footer>
            </section>) : null}
    </div>
    );
};

export default Modal;