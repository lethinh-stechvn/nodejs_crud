module.exports = app => {

  var router = require("express").Router();

  // // Create a new Tutorial
  // router.post("/", chuongtrinhhoc.create);

  // // Retrieve all chuongtrinhhoc
  // router.get("/", chuongtrinhhoc.findAll);

  // // Retrieve all published chuongtrinhhoc
  // router.get("/published", chuongtrinhhoc.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", chuongtrinhhoc.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", chuongtrinhhoc.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", chuongtrinhhoc.delete);

  // // Delete all chuongtrinhhoc
  // router.delete("/", chuongtrinhhoc.deleteAll);


  ////////////////////////////////////////////////////////////////
  const hososinhvien = require("../controllers/hososinhvien_controller.js");
  // Create a new Tutorial
   router.post("/hososinhvien", hososinhvien.create);

   // Retrieve all Tutorials
   router.get("/hososinhvien", hososinhvien.findAll);
 
   // Retrieve a single Tutorial with id
   router.get("/hososinhvien/:mssv", hososinhvien.findOne);
 
   // Update a Tutorial with id
   router.put("/hososinhvien/:mssv", hososinhvien.update);
 
   // Delete a Tutorial with id
   router.delete("/hososinhvien/:mssv", hososinhvien.delete);
 
   // Delete all Tutorials
   router.delete("/hososinhvien", hososinhvien.deleteAll);

  ////////////////////////////////////////////////////////////////
  const danhsachmonhoc = require("../controllers/danhsachmonhoc_controller.js");
  // Create a new Tutorial
   router.post("/danhsachmonhoc", danhsachmonhoc.create);

   // Retrieve all Tutorials
   router.get("/danhsachmonhoc", danhsachmonhoc.findAll);
 
   // Retrieve a single Tutorial with id
   router.get("/danhsachmonhoc/:mamonhoc", danhsachmonhoc.findOne);
 
   // Update a Tutorial with id
   router.put("/danhsachmonhoc/:mamonhoc", danhsachmonhoc.update);
 
   // Delete a Tutorial with id
   router.delete("/danhsachmonhoc/:mamonhoc", danhsachmonhoc.delete);
 
   // Delete all Tutorials
   router.delete("/danhsachmonhoc", danhsachmonhoc.deleteAll);

  ////////////////////////////////////////////////////////////////
  const chuongtrinhhoc = require("../controllers/chuongtrinhhoc_controller.js");
  // Create a new Tutorial
   router.post("/chuongtrinhhoc", chuongtrinhhoc.create);

   // Retrieve all Tutorials
   router.get("/chuongtrinhhoc", chuongtrinhhoc.findAll);
 
   // Retrieve a single Tutorial with id
   router.get("/chuongtrinhhoc/:nganhhoc", chuongtrinhhoc.findOne);
 
   // Update a Tutorial with id
   router.put("/chuongtrinhhoc/:nganhhoc", chuongtrinhhoc.update);
 
   // Delete a Tutorial with id
   router.delete("/chuongtrinhhoc/:nganhhoc", chuongtrinhhoc.delete);
 
   // Delete all Tutorials
   router.delete("/chuongtrinhhoc", chuongtrinhhoc.deleteAll);

  app.use('/api', router);
};
