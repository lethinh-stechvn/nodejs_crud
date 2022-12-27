const Chuongtrinhhoc_model = require("../models/chuongtrinhhoc_model.js");

// Create and Save a new object
exports.create = (req, res) => {
  // Valnganhhocate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a object
  const chuongtrinhhoc = new Chuongtrinhhoc_model({
    nganhhoc: req.body.nganhhoc,
    khoa: req.body.khoa,
    hocky: req.body.hocky,
    monhoc: req.body.monhoc,
    ghichu: req.body.ghichu
  });

  // Save into the database
  Chuongtrinhhoc_model.create(chuongtrinhhoc, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the chuongtrinhhoc."
      });
    else res.send(data);
  });
};

// Retrieve all object from the database (with condition).
exports.findAll = (req, res) => {
  const nganhhoc = req.query.nganhhoc;

  Chuongtrinhhoc_model.getAll(nganhhoc, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    else res.send(data);
  });
};

// Find a single by nganhhoc
exports.findOne = (req, res) => {
  Chuongtrinhhoc_model.findById(req.params.nganhhoc, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found with nganhhoc ${req.params.nganhhoc}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving with nganhhoc " + req.params.nganhhoc
        });
      }
    } else res.send(data);
  });
};

// find all published 
exports.findAllPublished = (req, res) => {
  Chuongtrinhhoc_model.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    else res.send(data);
  });
};

// Update a nganhhocentified by the nganhhoc in the request
exports.update = (req, res) => {
  // Valnganhhocate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Chuongtrinhhoc_model.updateById(
    req.params.nganhhoc,
    new Chuongtrinhhoc_model(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found with nganhhoc ${req.params.nganhhoc}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating with nganhhoc " + req.params.nganhhoc
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a with the specified nganhhoc in the request
exports.delete = (req, res) => {
  Chuongtrinhhoc_model.remove(req.params.nganhhoc, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found chuongtrinhhoc with nganhhoc ${req.params.nganhhoc}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete chuongtrinhhoc with nganhhoc " + req.params.nganhhoc
        });
      }
    } else res.send({ message: `chuongtrinhhoc was deleted successfully!` });
  });
};

// Delete all from the database.
exports.deleteAll = (req, res) => {
  Chuongtrinhhoc_model.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all chuongtrinhhocs."
      });
    else res.send({ message: `All chuongtrinhhocs were deleted successfully!` });
  });
};
