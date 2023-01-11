//rafce
import React from 'react'

const List = React.memo(({
    id,title,completed,todoData,setTodoData,provided,snapshot,handleClick
}) => {
    console.log("List Component");
    

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
    <div key={id} 
        {...provided.draggableProps} 
        ref={provided.innerRef} 
        {...provided.dragHandleProps}
        className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100" 
        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
    >
        
        <div className='items-center'>
        <input 
            type="checkbox" 
            onChange={() => handleCompleteChange(id)}
            defaultChecked={completed}
        /> 
        <span className={completed ? "line-through" : undefined}>{title}</span>
        </div>
            <div className='items-center'>
                <button className='px-4 py-2 float-right' onClick={()=> handleClick(id)}>x</button>
            </div>
    
        </div>
  );
});

export default List