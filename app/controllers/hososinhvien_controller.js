const Hososinhvien_model = require("../models/hososinhvien_model.js");

// Create and Save a new object
exports.create = (req, res) => {
  // Valmssvate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a object
  const hososinhvien = new Hososinhvien_model({
    mssv: req.body.mssv,
    hoten: req.body.hoten,
    ngaysinh: req.body.ngaysinh,
    gioitinh: req.body.gioitinh,
    quequan: req.body.quequan,
    doituong: req.body.doituong,
    nganhhoc: req.body.nganhhoc
  });

  // Save into the database
  Hososinhvien_model.create(hososinhvien, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the hososinhvien."
      });
    else res.send(data);
  });
};

// Retrieve all object from the database (with condition).
exports.findAll = (req, res) => {
  const mssv = req.query.mssv;

  Hososinhvien_model.getAll(mssv, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    else res.send(data);
  });
};

// Find a single by mssv
exports.findOne = (req, res) => {
  Hososinhvien_model.findById(req.params.mssv, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found with mssv ${req.params.mssv}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving with mssv " + req.params.mssv
        });
      }
    } else res.send(data);
  });
};

// find all published 
exports.findAllPublished = (req, res) => {
  Hososinhvien_model.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    else res.send(data);
  });
};

// Update a mssventified by the mssv in the request
exports.update = (req, res) => {
  // Valmssvate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Hososinhvien_model.updateById(
    req.params.mssv,
    new Hososinhvien_model(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found with mssv ${req.params.mssv}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating with mssv " + req.params.mssv
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a with the specified mssv in the request
exports.delete = (req, res) => {
  Hososinhvien_model.remove(req.params.mssv, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found hososinhvien with mssv ${req.params.mssv}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete hososinhvien with mssv " + req.params.mssv
        });
      }
    } else res.send({ message: `hososinhvien was deleted successfully!` });
  });
};

// Delete all from the database.
exports.deleteAll = (req, res) => {
  Hososinhvien_model.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all hososinhviens."
      });
    else res.send({ message: `All hososinhviens were deleted successfully!` });
  });
};
