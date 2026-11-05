# Findora – Campus Lost-and-Found Portal

Findora is a full-stack MERN application designed to help students report, discover, and recover lost and found items within a campus. It provides a simple platform where students can report missing belongings, upload item images, submit claim requests, and track their claims. Administrators can manage items and approve or reject claims.

## Features

### Student Features
- Student registration and login.
- Browse lost and found items.
- Report lost and found items.
- Upload item images.
- View item details.
- Submit claim requests with proof.
- Track personal claim requests.
- Edit and manage reported items.

### Admin Features
- Admin login and protected dashboard.
- View all claim requests.
- Approve or reject claims.
- Manage reported items.
- Filter and refresh claim requests.

### Additional Features
- JWT-based authentication.
- Role-based access control.
- MongoDB Atlas database integration.
- Responsive user interface.
- REST API integration.
- Image upload functionality.

## Technology Stack

- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Authentication:** JSON Web Token (JWT)
- **Password Security:** bcryptjs
- **Image Upload:** Multer
- **Deployment:** Render
- **Version Control:** Git and GitHub

## Project Structure

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

## Installation and Setup

### Prerequisites
- Node.js
- npm
- MongoDB Atlas account

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Findora
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

### 4. Start the Backend

From the backend folder:

```bash
node server.js
```

### 5. Access the Application

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## API Endpoints

### User Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users/register` | Register a student |
| POST | `/api/users/login` | Login |

### Items

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/items` | Get all items |
| GET | `/api/items/:id` | Get item details |
| POST | `/api/items` | Report an item |
| PUT | `/api/items/:id` | Update an item |
| DELETE | `/api/items/:id` | Delete an item |

### Claims

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/claims` | Submit a claim |
| GET | `/api/claims` | View all claims (Admin) |
| GET | `/api/claims/myclaims` | View personal claims |
| PUT | `/api/claims/:id` | Approve or reject a claim (Admin) |

Protected endpoints require JWT authentication.

## Deployment

- **Backend:** Render Web Service
- **Frontend:** Render Static Site
- **Database:** MongoDB Atlas

## How It Works

1. Students register and log in.
2. Students report lost or found belongings.
3. Other students browse available items.
4. A student submits a claim request with proof.
5. The administrator reviews the request.
6. The administrator approves or rejects the claim.
7. When approved, the item's status changes to `claimed`.

## Future Enhancements

- Email notifications for claim updates.
- Persistent cloud image storage.
- Advanced search and filtering.
- Campus-specific user verification.

## Project Purpose

Findora aims to simplify the lost-and-found process in educational institutions by providing a centralized, accessible, and user-friendly digital platform.

## License

This project is developed for educational purposes.
