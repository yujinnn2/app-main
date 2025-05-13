import React from 'react';

interface WelcomeMessageProps{
    name : string; // name은 String 타입로 전달
                   // 숫자면 string말고 number로 하셈 
                   
}

const WelcomeMessage:React.FC<WelcomeMessageProps> = ({name}) => {
    return <button style={{
        backgroundColor:'tomato',
        padding:'10px 20px',
        fontSize:'18px'
    }}>{name}</button>
}

export default WelcomeMessage;




// const WelcomeMessage:React.FC = () => {
//     return (
//         <div>
//             <h1>안녕하세요, 타입스크립트 문법입니다.</h1>
//         </div>
//     )
// }
// //return 뒤에 () 괄호가 있으면 무조건 div 사용해야함 .
// export default WelcomeMessage;