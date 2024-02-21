// A mock function to mimic making an async request for data
export function fetchLoggedInUserOrder(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/orders/?user.id=' + userId);
    const data = await response.json();
    resolve({data});
  }
  );
}
