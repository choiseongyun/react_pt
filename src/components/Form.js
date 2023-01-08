import React from 'react'

export default function Form({handleSubmit,value,setValue}) {
    //해야 할 일 텍스트 입력 랜더링 함수
  const handleChange = (e) =>{
    setValue(e.target.value)
    // this.setState({value: e.target.value })
  }
  


  return (
    <form style={{display:'flex'}} onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="value" 
            style={{ flex:'10', padding:'5px'}}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleChange}
          />
          <input 
            type="submit"
            value="입력"
            className="btn"
            style={{ flex : '1' }}
          />
        </form>
  )
}
