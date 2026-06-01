# Task Management System

## Overview

Task Management System is a full-stack web application developed using the MERN stack. The application enables users to manage their tasks efficiently through secure authentication, role-based access control, and complete task management functionality.

## Features

### Authentication & Authorization

* User Registration
* User Login
* JWT-Based Authentication
* Protected Routes
* Role-Based Access Control (Admin/User)

### Task Management

* Create Tasks
* View All Tasks
* View Task by ID
* Update Tasks
* Delete Tasks
* Task Status Management

### Database

* MongoDB Atlas Integration
* Mongoose ODM
* Secure Data Storage

---

## Technology Stack

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (JSON Web Token)
* bcryptjs

### Frontend

* React.js
* Vite
* Axios
* React Router DOM

---

## Project Structure

backend/

├── src/

│ ├── config/

│ ├── controllers/

│ ├── middleware/

│ ├── models/

│ ├── routes/

│ ├── utils/

│ └── app.js

frontend/

├── src/

│ ├── pages/

│ ├── services/

│ ├── App.jsx

│ └── main.jsx

---

## API Endpoints

### Authentication

| Method | Endpoint              | Description   |
| ------ | --------------------- | ------------- |
| POST   | /api/v1/auth/register | Register User |
| POST   | /api/v1/auth/login    | Login User    |

### Tasks

| Method | Endpoint          | Description    |
| ------ | ----------------- | -------------- |
| GET    | /api/v1/tasks     | Get All Tasks  |
| GET    | /api/v1/tasks/:id | Get Task By ID |
| POST   | /api/v1/tasks     | Create Task    |
| PUT    | /api/v1/tasks/:id | Update Task    |
| DELETE | /api/v1/tasks/:id | Delete Task    |

---

## Installation

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Demo Credentials

Email: [praneeth2@gmail.com](mailto:praneeth2@gmail.com)

Password: 123456

---

## Author

**Praneeth Kumar**

Backend Developer Intern Assignment Submission
