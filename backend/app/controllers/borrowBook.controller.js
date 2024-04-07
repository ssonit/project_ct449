const ApiError = require("../api-error");
const BorrowBookService = require("../services/borrowBook.service");
const MongoDB = require("../utils/mongodb.util");

exports.getAll = async (req, res, next) => {
  try {
    const borrowBookService = new BorrowBookService(MongoDB.client);
    const documents = await borrowBookService.getAll();
    return res.status(200).json(documents);
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while retrieving favorite contacts")
    );
  }
};
exports.getById = async (req, res, next) => {
  try {
    const borrowBookService = new BorrowBookService(MongoDB.client);

    const document = await borrowBookService.getById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Publisher not found"));
    }
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, `Error retrieving book with id=${req.params.id}`)
    );
  }
};

exports.delete = async (req, res, next) => {
  try {
    const borrowBookService = new BorrowBookService(MongoDB.client);
    const document = await borrowBookService.delete(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Book not found"));
    }
    return res.send({ message: "Book was deleted successfully" });
  } catch (error) {
    return next(
      new ApiError(500, `Could not delete book with id=${req.params.id}`)
    );
  }
};

exports.update = async (req, res, next) => {
  try {
    const borrowBookService = new BorrowBookService(MongoDB.client);
    const document = await borrowBookService.update(req.params.id, req.body);
    if (!document) {
      return next(new ApiError(404, "Book not found"));
    }
    return res.send({ message: "Book was updated successfully" });
  } catch (error) {
    return next(
      new ApiError(500, `Could not updated book with id=${req.params.id}`)
    );
  }
};
exports.add = async (req, res, next) => {
  try {
    const borrowBookService = new BorrowBookService(MongoDB.client);
    const document = await borrowBookService.add(req.body);

    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, "An error ocurred while creating the contact")
    );
  }
};
