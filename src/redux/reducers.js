const initialState = {
  groups: [{ id: 1, from: 1, to: 10, items: [] }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };
    case 'DELETE_GROUP':
      return {
        ...state,
        groups: state.groups.filter((group) => group.id !== action.payload),
      };
    case 'UPDATE_GROUP_ITEMS':
      const { groupId, items } = action.payload;
      // Use Set to store unique items by their id
      const uniqueItemsSet = new Set();
      const uniqueItemsArray = [];

      // Iterate through the fetched items and add only unique items to the array
      items.forEach((item) => {
        if (!uniqueItemsSet.has(item.id)) {
          uniqueItemsSet.add(item.id);
          uniqueItemsArray.push(item);
        }
      });

      return {
        ...state,
        groups: state.groups.map((group) =>
          group.id === groupId ? { ...group, items: uniqueItemsArray } : group
        ),
      };
    default:
      return state;
  }
};

export default reducer;
