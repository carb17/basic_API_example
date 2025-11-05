# User API 

![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-v6.x-green)
![Express](https://img.shields.io/badge/Express-5.x-blue)

Example API for **registering and managing users** using Node.js, Express, MongoDB/Mongoose, JWT, and Swagger.
Includes password encryption with bcrypt and authentication using JWT tokens.

---

## Technologies
- **Node.js** (v18.x)
- **Express** (v5.x)
- **MongoDB / Mongoose**
- **JWT** for authentication
- **Swagger UI** for documentation
- **bcryptjs** for password encryption

---

## Requirements
- Node.js v18.x
- MongoDB running locally or in the cloud
- npm

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/carb17/API.git
```

2. Go to the project folder:
```bash
cd API
```

3. Install dependencies:
```bash
npm install
```

4. Start the API:
```bash
npm start
```


## How it Works

1. **User Registration** (POST /users/register)

The user sends their email, password, and role.

The password is encrypted with bcrypt before being saved to MongoDB.

A new document is saved in the users collection, and a unique ID is returned.

2. **Login** (POST /users/login)

The user sends their email and password.

The password is compared to the stored password using bcrypt.compare.

If it is correct, a JWT token is generated containing the userId and role.

The token is returned to the client for use in future protected requests.

3. **Access to Protected Routes** (GET /users/:id)

The client must send the JWT token in the Authorization header: Bearer <token>.

An authentication middleware validates the token.

If the token is valid, access is granted, and the user information is returned.

If it is invalid or missing, a 401 (Unauthorized) error is returned.

4. **Swagger** (GET /doc)

Allows you to view and test all API routes from your browser.

Displays required parameters, request bodies, and sample responses.
