export const addGroup = (group) => ({
    type: 'ADD_GROUP',
    payload: group,
  });
  
  export const deleteGroup = (groupId) => ({
    type: 'DELETE_GROUP',
    payload: groupId,
  });
  
  export const updateGroupItems = (groupId, items) => ({
    type: 'UPDATE_GROUP_ITEMS',
    payload: { groupId, items },
  });
  