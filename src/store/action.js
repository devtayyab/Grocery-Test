/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

const uri = 'http://mopos.de/GetOrders';
export const Groceryget = data => {
  return async dispatch => {
    // const data = axios.get(uri)
    //  const result = JSON.stringify(data)
    console.log(data);

    dispatch({
      type: 'GET',
      payload: data,
    });
  };
};
