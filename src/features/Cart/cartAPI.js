// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/');
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
    });
    const data = await response.json();
    resolve({data});
  }
  );
}

export function fetchItemByUserId(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/cart?user='+userId);
    const data = await response.json();
    console.log(data);
    resolve({data});
  }
  );
}
