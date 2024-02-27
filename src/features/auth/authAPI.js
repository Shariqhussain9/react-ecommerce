// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new Promise(async (resolve) => {
    
    const response = await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'content-type': 'application/json'}
    });
    const data = await response.json();
    resolve({data});
  }
  );
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try{
      const response = await fetch('http://localhost:3000/auth/login/',{
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: {'content-type': 'application/json'},
        credentials: 'include'
      });

      if(response.ok){
        const data = await response.json();
        console.log({data});
        resolve({data});

      }else{
        const error = response.json();
        reject(error);

      }

    }catch(err){
      reject(err);
    }
    }
  );
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/users/'+update.id, {
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

export function signOut() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/auth/logout', {
      method: 'POST',
      credentials: 'include'
    })
    resolve({data : 'success'});
  }
  );
}