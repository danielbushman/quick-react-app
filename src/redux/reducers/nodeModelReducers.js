const nodeModels = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NODE_MODEL':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
        }
      ];
    default:
      return state;
  }
}

export default nodeModels