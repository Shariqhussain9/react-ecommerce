// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/products/',  { credentials: 'include'});
    const data = await response.json();
    resolve({data});
  }
  );
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/products/'+id, { credentials: 'include'});
    const data = await response.json();
    console.log(data);
    resolve({data});
  }
  );
}

export function fetchAllProductsByFilter(filter, sort, pagination, admin) {
  let queryString = '';
  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1];
      queryString += `${key}=${lastCategoryValue}&`
    }
  }

  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }

  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }
  
  queryString += admin? 'admin=true': ''; 

  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:3000/products?`+queryString, {
        credentials: 'include'
    });
    const data = await response.json();
    console.log(data);
    const totalItems = data.items;
    resolve({data:{products:data, totalItems: +data.totalItems}})
  }
  );
}


export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/brands/',{
      credentials: 'include'
  });
    const data = await response.json();
    resolve({data});
  }
  );
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/categories/', {
      credentials: 'include'
  });
    const data = await response.json();
    resolve({data});
  }
  );
}

export function createProduct(product){
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/products/',{
      method:'POST',
      body: JSON.stringify(product),
      headers: {'content-type': 'application/json'},
      credentials:'include'
    });
    const data = await response.json();
    resolve({data});
  })
}

export function updateProduct(update){
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/products/'+update.id,{
      method:'PATCH',
      body: JSON.stringify(update),
      headers: {'content-type': 'application/json'},
      credentials:'include'
    });
    const data = await response.json();
    resolve({data});
  })
}

export function deleteProduct(id){
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/products/'+id,{
      method:'DELETE',
      credentials: 'include'
    });
    const data = await response.json();
    resolve({data});
  })
}
