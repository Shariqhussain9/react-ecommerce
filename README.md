 Features :
- Basic E-commerce Features- Product lists, Product Details, Cart, Checkout 
- Secure Card Payments / Cash payments
- Admin Panel - Add/Edit Orders. Add/Edit Products
- Sorting, Filtering, and Pagination queries using Mongoose
- Authentication with Passport JS strategies
- Order Emails, Reset Password Emails
- User Profile and user orders


# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Dummy JSON Server API

This project sets up a dummy JSON Server to provide a RESTful API with endpoints for products, brands, categories, users, cart, and orders.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.
 
 ## Run Json Server at PORT 3000
 
 $ npx json-server db.json

## EndPoints
Products API: http://localhost:3000/products
Brands API: http://localhost:3000/brands
Categories API: http://localhost:3000/categories
Users API: http://localhost:3000/users
Cart API: http://localhost:3000/cart
Orders API: http://localhost:3000/orders


## Usage
You can now use the provided endpoints to perform CRUD operations on the respective resources. The server provides dummy data to simulate real-world scenarios.

For example:

To get all products, make a GET request to http://localhost:3000/products
To add a new user, make a POST request to http://localhost:3000/users with the user data in the request body.
To update a product, make a PUT request to http://localhost:3000/products/{product_id} with the updated product data.


