# Authentication System

A secure RESTful authentication API built with Node.js, Express, TypeScript, and PostgreSQL. Features JWT-based authentication, bcrypt password hashing, and protected routes via middleware.

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JSON Web Tokens (JWT)
- **Password Hashing:** bcryptjs
- **Dev Tools:** tsx, nodemon

---

## Project Structure

```
src/
├── controllers/
│   └── authController.ts    # Request handlers
├── middleware/
│   └── authMiddleware.ts    # JWT authentication middleware
├── routes/
│   └── authRoutes.ts        # Route definitions
├── services/
│   └── authServices.ts      # Business logic & database calls
├── utils/
│   ├── jwt.ts               # Token generation & verification
│   └── types.ts             # Custom TypeScript types
├── generated/
│   └── prisma/              # Prisma generated client
└── index.ts                 # Entry point
```

---

## API Endpoints

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/signUp` | Public | Register a new user |
| POST | `/api/auth/login` | Public | Login and receive JWT |
| GET | `/api/user/:id` | Protected | Get user by ID |

---

## Getting Started

### Prerequisites

- Node.js v18+
- PostgreSQL database
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/AmrChatelain/Authentication-System.git

# Navigate to the project directory
cd Authentication-System

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file at the root of the project:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/your_db
JWT_SECRET=your_secret_key
PORT=8000
```

### Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev
```

### Run the Server

```bash
npm run dev
```

Server will start at `http://localhost:8000`

---

## Usage

### Register a User

```http
POST /api/auth/signUp
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

Returns a JWT token.

### Get User by ID (Protected)

```http
GET /api/user/:id
Authorization: Bearer <your_token>
```

---
## Author

**Amr Chatelain**
- GitHub: [@AmrChatelain]([https://github.com/AmrChatelain](https://github.com/AmrChatelain))
- LinkedIn: [amr-chatelain]([https://www.linkedin.com/in/amr-chatelain-ba2a113a1/](https://www.linkedin.com/in/amr-chatelain-webdeveloper/))
