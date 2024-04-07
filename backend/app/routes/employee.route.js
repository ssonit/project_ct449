const express = require("express");

const {
  getAll,
  getById,
  add,
  update,
  delete: deleteEmployee,
} = require("../controllers/employee.controller");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);

router.post("/create", add);
router.put("/:id", update);
router.delete("/:id", deleteEmployee);

module.exports = router;
