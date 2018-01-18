import React from 'react';

const tasks = (props) => {
  return (
      <div>
          <p>Task: {props.value}<button onClick={props.remove}>REMOVE</button></p>
          <input type="text" onChange={props.changeTask}/>
      </div>
  );
};

export default tasks;