# Bank Transaction Management System

The **Bank Transaction Management System** is a web application designed to streamline and simplify the process of managing bank transactions. It provides a user-friendly interface for both administrators and normal users to perform various banking tasks efficiently.

## Features

## JWT Authentication System

To enhance security and control access to the Bank Transaction Management System, implemented JWT (JSON Web Tokens) authentication. This ensures that only authorized users can interact with the application.

1. **User Registration and Login**:
   - During registration, store the email, password(HASHED),role in the database.
   - Upon successful login, generate a JWT token with a payload containing relevant user information.

### Intuitive Main Page

Upon successful login, users are greeted with a clean and intuitive main page. Here, they can choose between two primary actions: initiating a new transaction or viewing previously submitted transactions. This clear navigation helps users quickly access the features they need.

### Responsive Navigation Bar

The application boasts a modern Material Design navigation bar. This responsive element features intuitive icons for easy navigation to key sections of the application, including the transaction form, transaction history table, user profile settings, and a logout option.

### Efficient New Transaction Handling

Users can initiate new bank transactions through a dedicated component. The form is designed for ease of use, providing fields for critical information such as customer details, transfer specifics, and regional information. As an added convenience, certain fields auto-populate based on the provided customer number.

### Comprehensive Transaction Viewing

The system incorporates a robust component for viewing submitted transactions. The table-based layout is crafted in Material Design, offering sorting and pagination features for a seamless user experience. This ensures that users can efficiently access and review transaction details.

### Validations for Data Integrity

To maintain data integrity, the application performs thorough validations. This includes checks for customer phone numbers and transfer amounts to ensure they consist only of numeric values. Additionally, validations are in place for beneficiary bank and payment details, ensuring they contain only valid characters.

### Dynamic Multi Value Form

The application includes a dynamic form that allows users to handle multiple values efficiently. Users can dynamically add or remove forms as needed, providing flexibility in managing various transaction scenarios.

### Seamless API Integration

The application seamlessly integrates with a web server for data retrieval and posting. This enables real-time communication with external systems, ensuring accurate and up-to-date information.

---

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git
- MongoDB installed and running

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/shyamenk/Financial-APP
    ```

2.  Navigate to the project directory:

    ```bash
    cd Financial-APP
    ```

3.  Install dependencies for frontend:

    ```bash
    cd frontend
    ```

    ```bash
    npm install
    ```

4.  Install dependencies for backend:

    ```bash
    cd backend
    ```

    ```bash
    npm install
    ```

    ```json
    // Add on top of the package.json

    "proxy": "http://localhost:8000",
    ```

5.  Setup environmental Variables:

    ```bash
    touch .env or create .env file
    ```

    ```env
    SECRET_KEY="your_secret_key_here"
    MONGODB_URI="your_mongodb_uri_here"
    ```

6.  Run the frontend server

    ```bash
    cd into frontend
    ```

    ```bash
    npm start
    ```

    The Frontend server will be available at [http://localhost:3000](http://localhost:3000).

7.  Run the backend server

    ```bash
    cd into backend
    ```

    ```bash
    npm start
    ```

    The Backend server will be available at [http://localhost:8000](http://localhost:8000).

## Endpoints

### `POST /register`

Register a new user.

#### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user or admin"
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

---

### General

- **Login Component**: Allows users to log in (supports Admin and Normal User accounts).
- **Main Page**: Displays options for "New Transaction" and "View Submitted Transactions" after logging in.
- **Logout Button**: Allows users to log out.
- **Material Design Navigation Bar**: Responsive navigation with various options.
- **New Bank Transaction Component**: Facilitates new bank transactions.
- **View Submitted Transactions Component**: Displays sorted and paginated transactions.
- **Data Population**: Automatically fills customer details based on customer number.
- **Validations**: Validates customer phone number, transfer amount, beneficiary bank, and payment details.
- **Currency Selection**: Dropdown for selecting transfer currency.
- **Reference Generation**: Auto-generates a reference.
- **API Integration**: Connects to a JSON web server for data retrieval and posting.
- **End-to-End Testing Scripts**: Included for testing.

### Multi Value Form

- **Dynamic Form**: Allows adding, removing.
- **Auto-Population**: Populates fields based on customer number with error handling.
- **Region-Specific Logic**: Adjusts form requirements based on selected region.
- **Transaction Type Logic**: Handles "New" and "Existing" transaction types.
