const Dangkyhocphan_model = require("../models/dangkyhocphan_model.js");

// Create and Save a new object
exports.create = (req, res) => {
  // Valsophieuate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a object
  const dangkyhocphan = new Dangkyhocphan_model({
    sophieu: req.body.sophieu,
    mssv: req.body.mssv,
    ngaylap: req.body.ngaylap,
    hocky: req.body.hocky,
    namhoc: req.body.namhoc,
  });

  // Save into the database
  Dangkyhocphan_model.create(dangkyhocphan, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the dangkyhocphan."
      });
    else res.send(data);
  });
};

// Retrieve all object from the database (with condition).
exports.findAll = (req, res) => {
  const sophieu = req.query.sophieu;

  Dangkyhocphan_model.getAll(sophieu, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    else res.send(data);
  });
};

// Find a single by sophieu
exports.findOne = (req, res) => {
  Dangkyhocphan_model.findById(req.params.sophieu, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found with sophieu ${req.params.sophieu}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving with sophieu " + req.params.sophieu
        });
      }
    } else res.send(data);
  });
};

// find all published 
exports.findAllPublished = (req, res) => {
  Dangkyhocphan_model.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    else res.send(data);
  });
};

// Update a sophieuentified by the sophieu in the request
exports.update = (req, res) => {
  // Valsophieuate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Dangkyhocphan_model.updateById(
    req.params.sophieu,
    new Dangkyhocphan_model(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found with sophieu ${req.params.sophieu}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating with sophieu " + req.params.sophieu
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a with the specified sophieu in the request
exports.delete = (req, res) => {
  Dangkyhocphan_model.remove(req.params.sophieu, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found dangkyhocphan with sophieu ${req.params.sophieu}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete dangkyhocphan with sophieu " + req.params.sophieu
        });
      }
    } else res.send({ message: `dangkyhocphan was deleted successfully!` });
  });
};

// Delete all from the database.
exports.deleteAll = (req, res) => {
  Dangkyhocphan_model.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all dangkyhocphans."
      });
    else res.send({ message: `All dangkyhocphans were deleted successfully!` });
  });
};
