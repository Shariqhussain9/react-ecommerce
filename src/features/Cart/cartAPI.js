// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/', { credentials: 'include'});
    const data = await response.json();
    resolve({data});
  }
  );
}

export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/cart',{
      method: 'POST',
      body: JSON.stringify(item),
      headers: {'content-type': 'application/json' },
      credentials: 'include'
    });
    const data = await response.json();
    resolve({data});
  }
  );
}

export function fetchItemByUserId(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/cart', { credentials: 'include'});
    const data = await response.json();
    console.log(data);
    resolve({data});
  }
  );
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    console.log(update);
    const response = await fetch('http://localhost:3000/cart/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: {'content-type': 'application/json'},
      credentials: 'include'
    });
    const data = await response.json();
    resolve({data});
  }
  );
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/cart/'+itemId, {
      method: 'DELETE',
      headers: {'content-type': 'application/json'},
      credentials: 'include'
    });
    const data = await response.json();
    resolve({ data: {id: itemId} });
  }
  );
}

export function resetCart(userId) {
  return new Promise(async (resolve) => {
    const response = await fetchItemByUserId(userId);
    const items = response.data;
    for (let item of items){
      await deleteItemFromCart(item.id);
    }
    resolve({ status: 'success' });
  });
}