const express = require("express");
const ApiError = require("./app/api-error");
const bookRouter = require("./app/routes/book.route");
const publisherRouter = require("./app/routes/publisher.route");
const readerRouter = require("./app/routes/reader.route");
const employeeRouter = require("./app/routes/employee.route");
const borrowBookRouter = require("./app/routes/borrowBook.route");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/book", bookRouter);
app.use("/api/publisher", publisherRouter);
app.use("/api/reader", readerRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/borrow-book", borrowBookRouter);

app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
