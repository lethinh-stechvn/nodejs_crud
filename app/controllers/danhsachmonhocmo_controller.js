const Danhsachmonhocmo_model = require("../models/danhsachmonhocmo_model.js");

// Create and Save a new object
exports.create = (req, res) => {
  // Valsttate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a object
  const danhsachmonhocmo = new Danhsachmonhocmo_model({
    stt: req.body.stt,
    hocky: req.body.hocky,
    namhoc: req.body.namhoc,
    monhoc: req.body.monhoc
  });

  // Save into the database
  Danhsachmonhocmo_model.create(danhsachmonhocmo, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the danhsachmonhocmo."
      });
    else res.send(data);
  });
};

// Retrieve all object from the database (with condition).
exports.findAll = (req, res) => {
  const stt = req.query.stt;

  Danhsachmonhocmo_model.getAll(stt, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    else res.send(data);
  });
};

// Find a single by stt
exports.findOne = (req, res) => {
  Danhsachmonhocmo_model.findById(req.params.stt, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found with stt ${req.params.stt}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving with stt " + req.params.stt
        });
      }
    } else res.send(data);
  });
};

// find all published 
exports.findAllPublished = (req, res) => {
  Danhsachmonhocmo_model.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    else res.send(data);
  });
};

// Update a sttentified by the stt in the request
exports.update = (req, res) => {
  // Valsttate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Danhsachmonhocmo_model.updateById(
    req.params.stt,
    new Danhsachmonhocmo_model(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found with stt ${req.params.stt}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating with stt " + req.params.stt
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a with the specified stt in the request
exports.delete = (req, res) => {
  Danhsachmonhocmo_model.remove(req.params.stt, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found danhsachmonhocmo with stt ${req.params.stt}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete danhsachmonhocmo with stt " + req.params.stt
        });
      }
    } else res.send({ message: `danhsachmonhocmo was deleted successfully!` });
  });
};

// Delete all from the database.
exports.deleteAll = (req, res) => {
  Danhsachmonhocmo_model.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all danhsachmonhocmos."
      });
    else res.send({ message: `All danhsachmonhocmos were deleted successfully!` });
  });
};
