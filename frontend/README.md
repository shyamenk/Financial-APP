# Bank Transaction Management System

The **Bank Transaction Management System** is a web application designed to streamline and simplify the process of managing bank transactions. It provides a user-friendly interface for both administrators and normal users to perform various banking tasks efficiently.

## Features

### Streamlined Login System

The application offers a secure login system that supports both admin and normal user accounts. This ensures that only authorized personnel can access the system. Administrators have access to additional functionalities for managing users and transactions.

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

The application seamlessly integrates with a JSON web server for data retrieval and posting. This enables real-time communication with external systems, ensuring accurate and up-to-date information.

---

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/shyamenk/Part--1-Frontend
    ```

2.  Navigate to the project directory:

    bash

    ```bash
    cd Part--1-Frontend
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Proxy add the below line in your `package.json` file

    ```json
    "proxy": "http://localhost:8000",


    ```

### JSON Server

Before running the application, set up the JSON server:

1.  Install JSON Server globally:

    ```bash
    npm install -g json-server
    ```

2.  Start the JSON Server:

    ```bash
    json-server --watch db.json --port 3001
    ```

The JSON server will be available at [http://localhost:3001](http://localhost:3001).

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
node server.js or npm start
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

### Possible End Points

```bash
# GET request for All Transactions

curl http://localhost:3001/transactions
```

```bash
# GET request for Individual Transactions based on the id
curl http://localhost:3001/transactions/1
```

---

### Running the Application

1.  Start the front-end:

    ```bash
    npm start
    ```

2.  Open [http://localhost:3000](http://localhost:3000) in your web browser.

## Features

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

- **Dynamic Form**: Allows adding, removing, and clearing forms.
- **Auto-Population**: Populates fields based on customer number with error handling.
- **Region-Specific Logic**: Adjusts form requirements based on selected region.
- **Transaction Type Logic**: Handles "New" and "Existing" transaction types.
