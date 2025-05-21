import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Counter from './counts';
import Type from './type';

// api 

// todo type 지정
interface todo {
  id: number;
  title: string;
  done: boolean;
}

function fetchTodoItems(): todo[] {
  return [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ]
}

function App() {
  const [todos, setTodos] = useState<todo[]>([]);
  // 상태에 타입을 지정 
  // const [todos,setodos]=useState([]);

  useEffect(() => {
    const data = fetchTodoItems();
    setTodos(data);
  }, []);
  return (
    <div className="App">
      <Type name ='철수' age={30}/>
      <Type name ='영희' age={30}/>
      <Counter/>
      <h1>Todo list</h1>
      {todos.map((todo) => (
        <div key = { todo.id } >
        ✅{ todo.title }
    </div>
  ))
}
      </div >
  );
}

export default App;
