import React from 'react';
import replyImg from '../../Images/reply.PNG'
const ReplyList = ({e}) => {
    return (
        <>
            {
                e.reply.map((e)=>{
                    return(
                        <div className='replybox'>
                            <div><img src = {replyImg}/></div>
                            <div>
                                <div>{e.date}</div>
                                <div>{e.comment}</div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default ReplyList;