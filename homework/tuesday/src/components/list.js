import React from 'react';
import ListItem from './list-item'

const List = (props) => (
  <div>
    <ul>
      {
        props.todos.map((item, index) => (
          <ListItem key={index} todo={item} />
        ))
      }
    </ul>
  </div> 
);

export default List;
