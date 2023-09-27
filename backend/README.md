# Node.js Authentication Server

This repository contains a basic Node.js server for user authentication using JWT tokens and MongoDB.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/shyamenk/server.git
    ```

2.  Navigate to the server directory:

    ```bash
    cd server
    ```

3.  Rename `.env.local` to `.env` and add your environment variables:

    env

    ```env
    SECRET_KEY="your_secret_key_here"
    MONGODB_URI="your_mongodb_uri_here"
    ```

4.  Install dependencies:

    ```bash
    npm install
    ```

### Running the Server

```bash
node server.js
```

The server will run at [http://localhost:8000](http://localhost:8000).

## Endpoints

### `POST /register`

Register a new user.

#### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### `POST /login`

Authenticate and receive a JWT token.

#### Request Body

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

## Built With

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- Bcrypt
