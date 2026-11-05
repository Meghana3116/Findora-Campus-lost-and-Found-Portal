# Findora – Campus Lost-and-Found Portal

Findora is a full-stack MERN application designed to help students report, discover, and recover lost and found items within a campus. It provides a centralized platform where students can report missing belongings, upload item images, submit claim requests, and track their claims. Administrators can manage reported items and approve or reject claim requests.

## 🌐 Live Application

- **Frontend:** [Findora – Live Website](https://findora-campus-lost-and-found-portal-1.onrender.com)
- **Backend API:** [Findora Backend](https://findora-campus-lost-and-found-portal.onrender.com)
- **Backend Health Check:** [Check Backend Status](https://findora-campus-lost-and-found-portal.onrender.com/)

## ✨ Features

### Student Features
- Student registration and login.
- Browse lost and found items.
- Report lost and found items.
- Upload item images.
- View detailed item information.
- Submit claim requests with proof.
- Track personal claim requests.
- Edit and manage reported items.

### Admin Features
- Admin login and protected dashboard.
- View all claim requests.
- Approve or reject claim requests.
- Manage reported items.
- Filter and refresh claim requests.

### Additional Features
- JWT-based authentication.
- Role-based access control.
- MongoDB Atlas database integration.
- Responsive user interface.
- REST API integration.
- Image upload functionality.
- Password hashing using bcryptjs.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| CSS | Styling and responsive design |
| Node.js | Backend runtime |
| Express.js | Backend API development |
| MongoDB Atlas | Cloud database |
| Mongoose | Database modeling |
| JWT | User authentication |
| bcryptjs | Password hashing |
| Multer | Image uploads |
| Render | Application deployment |
| Git & GitHub | Version control |

## 📁 Project Structure

```text
Findora/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.css
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

- Node.js (20 or newer recommended)
- npm
- MongoDB Atlas account
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Meghana3116/Findora-Campus-lost-and-Found-Portal
cd Findora-Campus-lost-and-Found-Portal
```

### 2. Backend Setup

Open the first terminal:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret
```

Configure your MongoDB Atlas connection string and a strong JWT secret.

**Important:** Never upload your `.env` file or share your database credentials.

Start the backend:

```bash
node server.js
```

The backend runs at:

`http://localhost:5000`

### 3. Frontend Setup

Open a second terminal from the project root:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at:

`http://localhost:5173`

### 4. Access the Application Locally

Open the frontend URL in your browser:

`http://localhost:5173`

Make sure both frontend and backend servers are running.

## 🔗 API Endpoints

### User Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users/register` | Register a new student |
| POST | `/api/users/login` | User login |

### Item Management

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/items` | Get all reported items |
| GET | `/api/items/:id` | Get item details |
| POST | `/api/items` | Report a new item |
| PUT | `/api/items/:id` | Update an item |
| DELETE | `/api/items/:id` | Delete an item |

### Claim Management

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/claims` | Submit a claim request |
| GET | `/api/claims` | View all claims (Admin) |
| GET | `/api/claims/myclaims` | View personal claims |
| PUT | `/api/claims/:id` | Approve or reject a claim (Admin) |

**Authentication:** Protected endpoints require a valid JWT Bearer token. Admin endpoints also require administrator authorization.

## 🚀 Deployment

Findora is deployed using the following services:

- **Frontend Hosting:** Render Static Site
- **Backend Hosting:** Render Web Service
- **Database Hosting:** MongoDB Atlas
- **Source Code:** GitHub

### Production URLs

- Frontend: https://findora-campus-lost-and-found-portal-1.onrender.com
- Backend: https://findora-campus-lost-and-found-portal.onrender.com

## 🔄 How It Works

1. Students register and log in to the application.
2. Students report lost or found belongings.
3. Other students browse the available items.
4. A student submits a claim request with supporting proof.
5. The administrator reviews the submitted request.
6. The administrator approves or rejects the claim.
7. When a claim is approved, the item's status automatically changes to `claimed`.

## 🔮 Future Enhancements

- Email notifications for claim updates.
- Persistent cloud-based image storage.
- Advanced search and filtering.
- Campus-specific student verification.
- Improved item recommendation features.

## 🎯 Project Purpose

Findora aims to simplify the lost-and-found process in educational institutions by providing a centralized, accessible, and user-friendly digital platform. It helps students reconnect with their belongings while making claim management easier for campus administrators.

## 👩‍💻 Project Information

**Project Name:** Findora – Campus Lost-and-Found Portal

**Project Type:** Full-Stack MERN Stack Web Application

**Domain:** Web Development

**Purpose:** Academic and educational project.

## 📄 License

This project is developed for educational and demonstration purposes.
