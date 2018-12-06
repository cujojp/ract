const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return [
        ...state,
        {}
      ];
    case 'UPDATE_TEXT': 
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
    default: 
      return state
  }
}

export default todos;
