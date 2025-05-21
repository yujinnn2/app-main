import {useState} from 'react';

const Counter:React.FC = () =>{

    const [count,setCount] = useState<number>(0);
    //typeScript <number>
    const handleClick = () =>{
        setCount(count+3);
    }
    const decrease= () =>{
       if(count === 0) return;
       // 0도달하면 끝. 더 작아지지 않음
       setCount(prevCount =>(prevCount > 0 ? prevCount -5 :0));
    }
    return(
        <div>
            <h2>숫자 증가 : {count}</h2>
            <button onClick={handleClick}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    )
}

export default Counter; 