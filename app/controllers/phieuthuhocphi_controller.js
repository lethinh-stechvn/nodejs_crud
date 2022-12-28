const Phieuthuhocphi_model = require("../models/phieuthuhocphi_model.js");

// Create and Save a new object
exports.create = (req, res) => {
  // Valsophieuhocphiate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a object
  const phieuthuhocphi = new Phieuthuhocphi_model({
    sophieuhocphi: req.body.sophieuhocphi,
    mssv: req.body.mssv,
    ngaylap: req.body.ngaylap,
    sotienthu: req.body.sotienthu

  });

  // Save into the database
  Phieuthuhocphi_model.create(phieuthuhocphi, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the phieuthuhocphi."
      });
    else res.send(data);
  });
};

// Retrieve all object from the database (with condition).
exports.findAll = (req, res) => {
  const sophieuhocphi = req.query.sophieuhocphi;

  Phieuthuhocphi_model.getAll(sophieuhocphi, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    else res.send(data);
  });
};

// Find a single by sophieuhocphi
exports.findOne = (req, res) => {
  Phieuthuhocphi_model.findById(req.params.sophieuhocphi, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found with sophieuhocphi ${req.params.sophieuhocphi}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving with sophieuhocphi " + req.params.sophieuhocphi
        });
      }
    } else res.send(data);
  });
};

// find all published 
exports.findAllPublished = (req, res) => {
  Phieuthuhocphi_model.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    else res.send(data);
  });
};

// Update a sophieuhocphientified by the sophieuhocphi in the request
exports.update = (req, res) => {
  // Valsophieuhocphiate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Phieuthuhocphi_model.updateById(
    req.params.sophieuhocphi,
    new Phieuthuhocphi_model(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found with sophieuhocphi ${req.params.sophieuhocphi}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating with sophieuhocphi " + req.params.sophieuhocphi
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a with the specified sophieuhocphi in the request
exports.delete = (req, res) => {
  Phieuthuhocphi_model.remove(req.params.sophieuhocphi, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found phieuthuhocphi with sophieuhocphi ${req.params.sophieuhocphi}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete phieuthuhocphi with sophieuhocphi " + req.params.sophieuhocphi
        });
      }
    } else res.send({ message: `phieuthuhocphi was deleted successfully!` });
  });
};

// Delete all from the database.
exports.deleteAll = (req, res) => {
  Phieuthuhocphi_model.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all phieuthuhocphis."
      });
    else res.send({ message: `All phieuthuhocphis were deleted successfully!` });
  });
};
