//rfc 치면 됨
import React from 'react'

export default function List({ todoData, setTodoData }) {
    

    
    //체크 박스 클릭 시 변환 함수
    const getStyle = (completed) =>{
        return{
            padding : "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: completed ? "line-through" : "none"
        }
    }
      //할 일 리스트 삭제 함수
      const handleClick = (id) =>{
        let newTodoData = todoData.filter(data => data.id !== id)
        console.log("newTodoData", newTodoData);
        // this.setState({todoData:newTodoData});
        setTodoData(newTodoData);
    }
    const btnStyle={
        color: "#fff",
        border :"none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor:"pointer",
        float: "right"
      }
    //체크 시 completed 를 true로 변환
    const handleCompleteChange = (id) =>{
        console.log(id);
        let newTodoData = todoData.map((data) => {
        if(data.id === id){
            data.completed = ! data.completed;
        }
        return data;
        });
        setTodoData(newTodoData);
        // this.setState({ todoData: newTodoData });
    };
  return (
    <div>
        {todoData.map((data) =>(
        <div style={getStyle(data.completed)} key={data.id}>
            <input 
              type="checkbox" 
              onChange={() => handleCompleteChange(data.id)}
              defaultChecked={data.completed}
            />
            {data.title}
            <button style={btnStyle} onClick={()=> handleClick(data.id)}>x</button>
   
          </div>
      ))}
    </div>
  )
}
