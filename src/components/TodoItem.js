import React from 'react';

const TodoItem = ({ item,index}) => {
  return (
    <div style={{textTransform:"capitalize",padding:"1px 5px",fontSize:"13px"}} key={indexedDB}>
      ({item.id}) {item.completed ? 'done' : 'not done'}
    </div>
  );
};

export default TodoItem;
