import React, {useState} from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List"

export default function App(){

  const [todoData,setTodoData] = useState([]);
  const [value, setValue] = useState("");
  //submit 시 동작하는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    //기존에 있던 할 일에 새로운 할 일 더하기
    // this.setState({ todoData: [...todoData, newTodo] });
    setTodoData(prev =>[...prev, newTodo]);
    setValue("");
    // this.setState({value:""});
  };
  

    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          <List todoData={todoData} setTodoData={setTodoData}/>
          
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
        </div>
      </div>
    );
}