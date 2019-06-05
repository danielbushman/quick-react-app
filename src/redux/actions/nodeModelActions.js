import Action from './actionTypes.js';

let nextId = 0
export const addNodeModel = name => ({
  type: Action.ADD_NODE_MODEL,
  id: nextId++,
  name
})