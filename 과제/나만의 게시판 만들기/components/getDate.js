//날짜, 시간 구하기!!

const getDate = () => {
    let getTime = new Date();
    let month = ('0' + (getTime.getMonth()+1)).slice(-2);
    let day = ('0' + getTime.getDate()).slice(-2);
    let hours = ('0' + getTime.getHours()).slice(-2);
    let minutes = ('0' + getTime.getMinutes()).slice(-2);
    let date = month + '-' + day +' '+ hours + ':' + minutes;
    return date;
};

export default getDate;