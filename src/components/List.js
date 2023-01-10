//rfc 치면 됨
import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function List({ todoData, setTodoData }) {
    

    
    //체크 박스 클릭 시 변환 함수
    // const getStyle = (completed) =>{
    //     return{
    //         padding : "10px",
    //         borderBottom: "1px #ccc dotted",
    //         textDecoration: completed ? "line-through" : "none"
    //     }
    // }
      //할 일 리스트 삭제 함수
      const handleClick = (id) =>{
        let newTodoData = todoData.filter(data => data.id !== id)
        console.log("newTodoData", newTodoData);
        // this.setState({todoData:newTodoData});
        setTodoData(newTodoData);
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
    const handleEnd = (result) =>{
        // result 매개변수에는 source 항목 및 대상 위치와 같은 드래그 이벤트에 대한 정보가 포함
        if(!result.destination) return;

        // 리액트 불변성을 지켜주기 위해 새로운 todoData 생성
        const newTodoData =todoData;

        // 1. 변경시키는 아이템을 배열에서 지움
        // 2. return 값으로 지워진 아이템을 잡아줌
        const [reorderedItem] = newTodoData.splice(result.source.index, 1);

        //원하는 자리에 reorderedItem을 insert
        newTodoData.splice(result.destination.index, 0, reorderedItem);
        setTodoData(newTodoData);
    }
  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
          {todoData.map((data,index) =>(
            <Draggable
              key={data.id}
              draggableId={data.id.toString()}
              index={index}
            >
              {(provided, snapshot)=>(
              <div key={data.id} 
                {...provided.draggableProps} 
                ref={provided.innerRef} 
                {...provided.dragHandleProps}
                className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100" 
                } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
              >
                 
                    <div className='items-center'>
                    <input 
                      type="checkbox" 
                      onChange={() => handleCompleteChange(data.id)}
                      defaultChecked={data.completed}
                    /> 
                    <span className={data.completed ? "line-through" : undefined}>{data.title}</span>
                    </div>
                        <div className='items-center'>
                          <button className='px-4 py-2 float-right' onClick={()=> handleClick(data.id)}>x</button>
                        </div>
               
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
