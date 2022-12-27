const Danhsachmonhoc_model = require("../models/danhsachmonhoc_model.js");

// Create and Save a new object
exports.create = (req, res) => {
  // Valmamonhocate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a object
  const danhsachmonhoc = new Danhsachmonhoc_model({
    mamonhoc: req.body.mamonhoc,
    tenmonhoc: req.body.tenmonhoc,
    loaimonhoc: req.body.loaimonhoc,
    sotiet: req.body.sotiet
  });

  // Save into the database
  Danhsachmonhoc_model.create(danhsachmonhoc, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the danhsachmonhoc."
      });
    else res.send(data);
  });
};

// Retrieve all object from the database (with condition).
exports.findAll = (req, res) => {
  const mamonhoc = req.query.mamonhoc;

  Danhsachmonhoc_model.getAll(mamonhoc, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    else res.send(data);
  });
};

// Find a single by mamonhoc
exports.findOne = (req, res) => {
  Danhsachmonhoc_model.findById(req.params.mamonhoc, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found with mamonhoc ${req.params.mamonhoc}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving with mamonhoc " + req.params.mamonhoc
        });
      }
    } else res.send(data);
  });
};

// find all published 
exports.findAllPublished = (req, res) => {
  Danhsachmonhoc_model.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    else res.send(data);
  });
};

// Update a mamonhocentified by the mamonhoc in the request
exports.update = (req, res) => {
  // Valmamonhocate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Danhsachmonhoc_model.updateById(
    req.params.mamonhoc,
    new Danhsachmonhoc_model(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found with mamonhoc ${req.params.mamonhoc}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating with mamonhoc " + req.params.mamonhoc
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a with the specified mamonhoc in the request
exports.delete = (req, res) => {
  Danhsachmonhoc_model.remove(req.params.mamonhoc, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found danhsachmonhoc with mamonhoc ${req.params.mamonhoc}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete danhsachmonhoc with mamonhoc " + req.params.mamonhoc
        });
      }
    } else res.send({ message: `danhsachmonhoc was deleted successfully!` });
  });
};

// Delete all from the database.
exports.deleteAll = (req, res) => {
  Danhsachmonhoc_model.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all danhsachmonhocs."
      });
    else res.send({ message: `All danhsachmonhocs were deleted successfully!` });
  });
};
