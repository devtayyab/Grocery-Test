/* eslint-disable prettier/prettier */
export default (state = {}, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case 'GET':
      return (state = action.payload);

    default:
      return state;
  }
};
