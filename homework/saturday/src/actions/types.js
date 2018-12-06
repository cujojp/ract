let nextTodoId = 0;

export const addTodo = (text) => {
  return ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  });
}

export const updateText = (text) => {
  return ({
    type: 'UPDATE_TEXT',
    id: nextTodoId++,
    text
  })
};
