import React from 'react';

const TodoItem = ({ dataItem }) => {
  return (
    <div>
      {dataItem.name} - {dataItem.description}
    </div>
  );
};

export default TodoItem;
