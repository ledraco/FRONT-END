import React from 'react';

// 카테고리
const Select = ({handleSelect,Selected}) => {

    const selectList =
    ["일상","전자공학부","건축학부","산업공학부","화학소재공학부","신소재공학부","기계공학과","기계설계공학과","기계시스템공학과",
    "토목공학과","컴퓨터공학과","컴퓨터소프트웨어공학과","인공지능공학과","광시스템공학과","메디컬IT융합공학과","환경공학과",
    "IT융합학과","수리빅데이터학과","화학생명과학과","경영학과"];

    return (
        <select className = "select" onChange={handleSelect} value={Selected}>
            <option disabled>=== 카테고리 선택 ===</option>
                {selectList.map((item,i) => (<option value={item} key={i}>
                {item}
            </option>))}
        </select>
    );
};

export default Select;