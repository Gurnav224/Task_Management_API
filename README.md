# 🧪 Task Management - Express + MongoDB API

A RESTful API built with **Express.js** and **MongoDB** using **Mongoose**.
This project serves as a task managament backend APIs with features like CRUD operations, environment configuration, and modular architecture.

---

## 📦 Features

- RESTful API design
- MongoDB with Mongoose ODM
- Environment variable support via dotenv
- Centralized error handling
- Modular routing structure
- Sample CRUD operations

---

## 🚀 Getting Started

### 📁 Clone the repo

```bash
git clone https://github.com/Gurnav224/Task_Management_API
cd Task_Management_API
```

### 📦 Install dependencies

```
npm install
```

### ⚙️ Set up environment variables

Create a .env file in the root directory and add the following:

```env
PORT=5000
DB_URI=mongodb://localhost:27017/your-db-name
```

### 📂 Project Structure

```
task_managment_api/
│
├── config/
│   └── db.js              # MongoDB connection logic
│
├── controllers/
│                  # Controller logic
│
├── models/
│                  # Mongoose schema
│
├── routes/
│                    # Express routes
│
├── .env                   # Environment variables
├── index.js              # Entry point
├── package.json
└── README.md

```

### 📡 API Endpoints

### 🟢 Base URL

https://task-management-api-weld-psi.vercel.app/

### 🔐 Auth Routes

### 📥 Sign Up

**POST** /auth/signup
Registers a new user and returns a token.

🔸 Request Body

```json
{
  "username": "test_user1",
  "email": "test_user1@gmail.com",
  "password": "123456"
}
```

✅ Response (201 Created)

```json
{
  "message": "user register successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

❌ Possible Errors

- 400 Bad Request – Missing or invalid fields
- 409 Conflict – Email already exists

---

### 📥 login

**POST** /auth/login
login with existing user and returns a token.

🔸 Request Body

```json
{
  "email": "test_user1@gmail.com",
  "password": "123456"
}
```

✅ Response (200 success)

```json
{
  "message": "user register successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

❌ Possible Errors

- 404 not found – user not found
- 401 unauthorized – Invalide password

---

### 📥 user profile

**GET** /auth/me
Get authenticated user details
🔸 Request Body

- bearer jwt token pass in headers and verify check for authenticated user
  if everything goes correct get user details successfully

```json

  Authorization: Bearer <JWT Token>
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

```

✅ Response (200 success)

```json
{
  "message": "welcome to profile",
  "user": {
    "_id": "67f5ea7680d7a3bbfaddcb41",
    "username": "test_user1",
    "email": "test_user1@gmail.com",
    "createdAt": "2025-04-09T03:33:10.047Z",
    "updatedAt": "2025-04-09T03:33:10.047Z"
  }
}
```

❌ Possible Errors

- 404 not found – user not found

### 🔐 Task Routes

**POST** /task
create new task with their details
🔸 Request Body

```json
{
  "title": "new task added",
  "description": "get task according to the user",
  "status": "completed"
}
```

✅ Response (200 success)

```json
{
  "message": "new task created successfully",
  "task": {
    "title": "new task added",
    "description": "get task according to the user",
    "status": "completed",
    "user": "67f5ea7680d7a3bbfaddcb41",
    "_id": "67f5f3e1d3a9c47136f97006",
    "createdAt": "2025-04-09T04:13:21.779Z",
    "updatedAt": "2025-04-09T04:13:21.779Z",
    "__v": 0
  }
}
```

❌ Possible Errors

- 404 not found – title is required

---

**GET** /task

GET all task

🔸 Request Body

```json

```

✅ Response (200 success)

```json
{
  "message": "get all tasks",
  "tasks": [
    {
      "_id": "67f5f3e1d3a9c47136f97006",
      "title": "new task added",
      "description": "get task according to the user",
      "status": "completed",
      "user": "67f5ea7680d7a3bbfaddcb41",
      "createdAt": "2025-04-09T04:13:21.779Z",
      "updatedAt": "2025-04-09T04:13:21.779Z",
      "__v": 0
    },
    {
      "_id": "67f5fa6717156c0d360c04c2",
      "title": "new task added",
      "description": "get task according to the user",
      "status": "completed",
      "user": "67f5ea7680d7a3bbfaddcb41",
      "createdAt": "2025-04-09T04:41:11.152Z",
      "updatedAt": "2025-04-09T04:41:11.152Z",
      "__v": 0
    }
  ]
}
```

❌ Possible Errors

- 404 not found – task not found

---

**PUT** /task/:taskId
update task with their new details details
🔸 Request Body

```json
{
  "title": "task title updated"
}
```

✅ Response (200 success)

```json
{
  "message": "task updated successfully",
  "task": {
    "_id": "67f5f3e1d3a9c47136f97006",
    "title": "task title updated",
    "description": "get task according to the user",
    "status": "completed",
    "user": "67f5ea7680d7a3bbfaddcb41",
    "createdAt": "2025-04-09T04:13:21.779Z",
    "updatedAt": "2025-04-09T04:45:41.529Z",
    "__v": 0
  }
}
```

❌ Possible Errors

- 404 not found – task not found

---

**PUT** /task/:taskId

get the task id from req.params delete the the task

🔸 Request Body

```json

```

✅ Response (200 success)

```json
{ "message": "task deleted successfully" }
```

❌ Possible Errors

- 404 not found – task not found

---

## Deployment details.

Project deployed on vercel

deployed_url

https://task-management-api-weld-psi.vercel.app/
