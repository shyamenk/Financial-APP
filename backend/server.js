const db = require("./database/database.js");
const authRoute = require("./routes/authRoute.js");
const { json } = require("body-parser");
const cors = require("cors");

const transactionRoutes = require("./routes/transactionRoutes");
const express = require("express");

const app = express();
app.use(json());
app.use(cors());
app.use(authRoute);
app.use(transactionRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
