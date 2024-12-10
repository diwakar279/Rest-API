# User Management MERN Stack Application

## Project Overview
This is a full-stack User Management application built using the MERN stack (MongoDB, Express, React, Node.js).

## Features
- User Registration
- User Login
- User Profile Management
- JWT Authentication

## Prerequisites
- Node.js (v14 or later)
- MongoDB
- npm or yarn

## Setup Instructions

### Backend Setup
1. Navigate to backend directory
```bash
cd backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Start the backend server
```bash
npm start
```

### Frontend Setup
1. Navigate to frontend directory
```bash
cd frontend
```

2. Install dependencies
```bash
npm install
```

3. Start the React development server
```bash
npm start
```

## Technologies Used
- MongoDB
- Express.js
- React
- Node.js
- JWT for Authentication
- Axios for API calls
- Mongoose for MongoDB object modeling

## API Endpoints
- POST /api/users/register
- POST /api/users/login
- GET /api/users/profile
- PUT /api/users/profile

## Additional Notes
- Ensure MongoDB is running
- Use environment variables for sensitive information
- Implement proper error handling
```