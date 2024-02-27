// A mock function to mimic making an async request for data
export function fetchLoggedInUserOrder(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/orders/' + userId, { credentials: 'include'});
    const data = await response.json();
    console.log(data);
    resolve({data});
  }
  );
}


export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/users/own' , { credentials: 'include'});
    const data = await response.json();
    resolve({data});
  }
  );
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/users/' + update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json'},
      credentials: 'include'
    });
    const data = await response.json();
    resolve({data});
  }
  );
}


