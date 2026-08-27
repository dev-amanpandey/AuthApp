# 🔐 AuthApp

A secure and scalable **REST API authentication system** built with **Node.js, Express.js, MongoDB, JWT, and bcrypt**.

AuthApp provides a backend foundation for applications that require user registration, login, password protection, JWT-based authentication, and role-based access control.

---

## 🚀 Features

* 👤 User Registration
* 🔑 User Login
* 🔒 Password Hashing with **bcrypt**
* 🎟️ JWT-based Authentication
* 🛡️ Protected Routes
* 👨‍💼 Role-Based Authorization
* 🍃 MongoDB Database Integration
* ⚙️ Environment Variable Configuration
* 🚀 RESTful API Architecture
* 🔄 Development support with Nodemon

---

## 🛠️ Tech Stack

| Technology     | Purpose                                     |
| -------------- | ------------------------------------------- |
| **Node.js**    | JavaScript runtime                          |
| **Express.js** | REST API and server framework               |
| **MongoDB**    | NoSQL database                              |
| **Mongoose**   | MongoDB ODM                                 |
| **JWT**        | Authentication & authorization              |
| **bcrypt**     | Secure password hashing                     |
| **dotenv**     | Environment variable management             |
| **Nodemon**    | Automatic server restart during development |

These dependencies are defined in the project's `package.json`.

---

## 📂 Project Structure

```text
AuthApp/
│
├── config/
│   └── database.js
│
├── controllers/
│   └── Auth.js
│
├── middlewares/
│   └── auth.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── user.js
│
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

The project follows a modular backend structure separating database configuration, controllers, middleware, models, and routes.

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* MongoDB or a MongoDB Atlas database

---

### 1. Clone the Repository

```bash
git clone https://github.com/dev-amanpandey/AuthApp.git
```

### 2. Navigate to the Project

```bash
cd AuthApp
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=4000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> ⚠️ Never commit your `.env` file or expose your `JWT_SECRET`.

### 5. Start the Server

For development:

```bash
npm run dev
```

For production:

```bash
npm start
```

The project uses `index.js` as its entry point and defaults to port `4000` when no `PORT` environment variable is provided.

---

## 🌐 API Base URL

```text
http://localhost:4000/api/v1
```

The Express application mounts the user routes under `/api/v1`.

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| `POST` | `/api/v1/signup` | Register a new user           |
| `POST` | `/api/v1/login`  | Authenticate an existing user |

### Protected Routes

| Method | Endpoint          | Description                       |
| ------ | ----------------- | --------------------------------- |
| `GET`  | `/api/v1/test`    | Test authenticated access         |
| `GET`  | `/api/v1/student` | Access student-protected resource |
| `GET`  | `/api/v1/admin`   | Access admin-protected resource   |

---

## 📝 User Registration

### Request

```http
POST /api/v1/signup
Content-Type: application/json
```

Example request body:

```json
{
  "name": "Aman Pandey",
  "email": "aman@example.com",
  "password": "yourpassword",
  "role": "Student"
}
```

The authentication controller handles user registration and password protection before storing user information in MongoDB.

---

## 🔑 User Login

### Request

```http
POST /api/v1/login
Content-Type: application/json
```

Example:

```json
{
  "email": "aman@example.com",
  "password": "yourpassword"
}
```

After successful authentication, the backend generates a JWT that can be used to access protected resources.

---

## 🛡️ Authentication Flow

```text
                ┌───────────────┐
                │     Client    │
                └───────┬───────┘
                        │
                  Signup / Login
                        │
                        ▼
              ┌───────────────────┐
              │  Express Server   │
              └─────────┬─────────┘
                        │
                        ▼
              ┌───────────────────┐
              │ Auth Controller   │
              └─────────┬─────────┘
                        │
              ┌─────────┴─────────┐
              ▼                   ▼
         bcrypt Hash          MongoDB
              │                   │
              └─────────┬─────────┘
                        │
                        ▼
                   JWT Token
                        │
                        ▼
                Protected Route
                        │
                        ▼
               Authentication
                 Middleware
                        │
                        ▼
                Authorized User
```

---

## 🔐 Security

AuthApp follows important authentication practices:

* Passwords are hashed using **bcrypt** instead of storing plain-text passwords.
* **JWT** is used for authentication.
* Authentication middleware protects restricted routes.
* Sensitive configuration is stored using environment variables.
* Role-based authorization can restrict access to specific resources.

---

## 👥 Role-Based Authorization

AuthApp supports role-based access control.

For example:

```text
                    User
                      │
                      ▼
                JWT Validation
                      │
              ┌───────┴───────┐
              │               │
           Student           Admin
              │               │
              ▼               ▼
        Student Route    Admin Route
```

This approach allows different users to access different resources based on their assigned role.

---

## 🗄️ Database

The application uses **MongoDB** with **Mongoose** for database management.

The database connection is configured separately inside:

```text
config/database.js
```

User-related data is handled through the model located at:

```text
models/User.js
```

---

## 🧩 Backend Architecture

The project follows a modular architecture:

```text
Routes
   ↓
Controllers
   ↓
Models
   ↓
MongoDB
```

Authentication middleware is used between routes and controllers where protected access is required.

This separation makes the application easier to maintain, debug, and extend.

---

## 📌 Example Use Cases

AuthApp can be used as the authentication backend for:

* E-commerce applications
* Learning management systems
* Portfolio admin panels
* Social media applications
* Student management systems
* SaaS applications
* Full-stack MERN applications

---

## 🚀 Future Improvements

Some potential improvements for the project include:

* [ ] Refresh token implementation
* [ ] Logout endpoint
* [ ] Forgot password functionality
* [ ] Email verification
* [ ] Input validation
* [ ] Rate limiting
* [ ] CORS configuration
* [ ] Centralized error handling
* [ ] API documentation with Swagger
* [ ] Unit and integration testing
* [ ] Production deployment
* [ ] Improved cookie security

---

## 👨‍💻 Author

### Aman Pandey

**GitHub:**
https://github.com/dev-amanpandey

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

### 📄 License

This project is currently released under the **ISC License**.
