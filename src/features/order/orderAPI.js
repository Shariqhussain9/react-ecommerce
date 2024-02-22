// A mock function to mimic making an async request for data
export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      body: JSON.stringify(order),
      header: {'contetnt-type': 'application/json'}
    });
    const data = await response.json();
    resolve({data});
  }
  );
}

export function fetchAllOrders(sort, pagination) {
  let queryString = '';
  
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  console.log(queryString);
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/orders?'+queryString);
    const data = await response.json();
    const totalOrders = data.items;
    resolve({data:{orders: data.data, totalOrders: +totalOrders}})
  }
  );
}

export function updateOrder(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/orders/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      header: {'contetnt-type': 'application/json'}
    });
    const data = await response.json();
    resolve({data});
  }
  );
}