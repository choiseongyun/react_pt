import React, {useState, useCallback} from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";

export default function App(){
  console.log("App Component");
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
    //할 일 리스트 삭제 함수
    const handleClick = useCallback((id) =>{  
      let newTodoData = todoData.filter(data => data.id !== id)
      console.log("newTodoData", newTodoData);
      // this.setState({todoData:newTodoData});
      setTodoData(newTodoData);
  },[todoData]);

    return(
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
          <div className="flex justify-between mb-3">
            <h1>할 일 목록</h1>
          </div>
          <Lists handleClick={handleClick} todoData={todoData} setTodoData={setTodoData}/>
          
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
        </div>
      </div>
    );
}