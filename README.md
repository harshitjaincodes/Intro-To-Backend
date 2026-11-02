# Intro to Backend API

A RESTful backend application built using **Node.js, Express.js, and MongoDB Atlas**. The project demonstrates core backend development concepts, including database integration, CRUD operations, and user authentication with password hashing.

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Backend web framework |
| **MongoDB Atlas** | Cloud-based NoSQL database |
| **Mongoose** | MongoDB object data modeling (ODM) |
| **Bcrypt** | Secure password hashing |
| **Nodemon** | Automatic server restart during development |

## 📁 Project Structure

```text
Intro-To-Backend/
│
├── backend/
│   └── src/
│       ├── config/
│       │   ├── constants.js
│       │   └── database.js
│       │
│       ├── controllers/
│       │   ├── post.controller.js
│       │   └── user.controller.js
│       │
│       ├── models/
│       │   ├── post.model.js
│       │   └── user.model.js
│       │
│       ├── routes/
│       │   ├── post.route.js
│       │   └── user.route.js
│       │
│       ├── app.js
│       └── index.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/harshitjaincodes/intro-to-backend.git
cd intro-to-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following configuration:

```env
PORT=4000
MONGODB_URI=your_mongodb_atlas_connection_string
```

Replace the placeholder with your MongoDB Atlas connection string.

**Important:** Never commit your `.env` file or expose your database credentials publicly.

### 4. Start the Development Server

```bash
npm run dev
```

Once the server starts successfully, it will be available at:

```text
http://localhost:4000
```

## 📌 API Endpoints

The application provides REST API endpoints for user authentication and post management.

### 👤 User Authentication

**Base URL:** `/api/v1/users`

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/register` | Register a new user |
| `POST` | `/login` | Authenticate an existing user |
| `POST` | `/logout` | Log out the current user |
| `DELETE` | `/delete-account` | Delete the user account |

### 📝 Posts Management (CRUD)

**Base URL:** `/api/v1/posts`

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/create` | Create a new post |
| `GET` | `/getPosts` | Retrieve all posts |
| `PATCH` | `/update/:id` | Update an existing post |
| `DELETE` | `/delete/:id` | Delete a post |

## 🧪 API Testing

The API endpoints can be tested using **Postman** or **Thunder Client**.

1. Start the development server using `npm run dev`.
2. Open Postman or Thunder Client.
3. Set the request URL to `http://localhost:4000`.
4. Select the appropriate HTTP method and API endpoint.
5. For requests containing JSON data, set the header:

   ```text
   Content-Type: application/json
   ```

6. Send the request and inspect the response.

## 🔐 Security

- Passwords are hashed using Bcrypt before being stored.
- Database credentials are managed through environment variables.
- The `.env` file should be excluded from version control.

## 👨‍💻 Author

**Harshit Jain**

- GitHub: [@harshitjaincodes](https://github.com/harshitjaincodes)
- Project Repository: [Intro to Backend API](https://github.com/harshitjaincodes/intro-to-backend)

---

*Developed as a backend development project to explore REST APIs, Express.js, MongoDB, and user authentication.*