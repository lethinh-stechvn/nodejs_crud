const Danhsachchuadonghocphi_model = require("../models/danhsachchuadonghocphi_model.js");

// Create and Save a new object
exports.create = (req, res) => {
  // Valmssvate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a object
  const danhsachchuadonghocphi = new Danhsachchuadonghocphi_model({
    stt: req.body.stt,
    mssv: req.body.mssv,
    namhoc: req.body.namhoc,
    hocky: req.body.hocky,
    sotiendangky: req.body.sotiendangky,
    sotienphaidong: req.body.sotienphaidong,
    sotienconlai: req.body.sotienconlai,
  });

  // Save into the database
  Danhsachchuadonghocphi_model.create(danhsachchuadonghocphi, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the danhsachchuadonghocphi."
      });
    else res.send(data);
  });
};

// Retrieve all object from the database (with condition).
exports.findAll = (req, res) => {
  const mssv = req.query.mssv;

  Danhsachchuadonghocphi_model.getAll(mssv, (err, data) => {
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
  Danhsachchuadonghocphi_model.findById(req.params.mssv, (err, data) => {
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
  Danhsachchuadonghocphi_model.getAllPublished((err, data) => {
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

  Danhsachchuadonghocphi_model.updateById(
    req.params.mssv,
    new Danhsachchuadonghocphi_model(req.body),
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
  Danhsachchuadonghocphi_model.remove(req.params.mssv, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found danhsachchuadonghocphi with mssv ${req.params.mssv}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete danhsachchuadonghocphi with mssv " + req.params.mssv
        });
      }
    } else res.send({ message: `danhsachchuadonghocphi was deleted successfully!` });
  });
};

// Delete all from the database.
exports.deleteAll = (req, res) => {
  Danhsachchuadonghocphi_model.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all danhsachchuadonghocphis."
      });
    else res.send({ message: `All danhsachchuadonghocphis were deleted successfully!` });
  });
};
