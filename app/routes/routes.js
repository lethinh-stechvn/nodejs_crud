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

  ////////////////////////////////////////////////////////////////
  const danhsachmonhocmo = require("../controllers/danhsachmonhocmo_controller.js");
  // Create a new Tutorial
   router.post("/danhsachmonhocmo", danhsachmonhocmo.create);

   // Retrieve all Tutorials
   router.get("/danhsachmonhocmo", danhsachmonhocmo.findAll);
 
   // Retrieve a single Tutorial with id
   router.get("/danhsachmonhocmo/:stt", danhsachmonhocmo.findOne);
 
   // Update a Tutorial with id
   router.put("/danhsachmonhocmo/:stt", danhsachmonhocmo.update);
 
   // Delete a Tutorial with id
   router.delete("/danhsachmonhocmo/:stt", danhsachmonhocmo.delete);
 
   // Delete all Tutorials
   router.delete("/danhsachmonhocmo", danhsachmonhocmo.deleteAll);

////////////////////////////////////////////////////////////////
  const dangkyhocphan = require("../controllers/dangkyhocphan_controller.js");
  // Create a new Tutorial
   router.post("/dangkyhocphan", dangkyhocphan.create);

   // Retrieve all Tutorials
   router.get("/dangkyhocphan", dangkyhocphan.findAll);
 
   // Retrieve a single Tutorial with id
   router.get("/dangkyhocphan/:sophieu", dangkyhocphan.findOne);
 
   // Update a Tutorial with id
   router.put("/dangkyhocphan/:sophieu", dangkyhocphan.update);
 
   // Delete a Tutorial with id
   router.delete("/dangkyhocphan/:sophieu", dangkyhocphan.delete);
 
   // Delete all Tutorials
   router.delete("/dangkyhocphan", dangkyhocphan.deleteAll);

////////////////////////////////////////////////////////////////
const phieuthuhocphi = require("../controllers/phieuthuhocphi_controller.js");
// Create a new Tutorial
 router.post("/phieuthuhocphi", phieuthuhocphi.create);

 // Retrieve all Tutorials
 router.get("/phieuthuhocphi", phieuthuhocphi.findAll);

 // Retrieve a single Tutorial with id
 router.get("/phieuthuhocphi/:sophieuhocphi", phieuthuhocphi.findOne);

 // Update a Tutorial with id
 router.put("/phieuthuhocphi/:sophieuhocphi", phieuthuhocphi.update);

 // Delete a Tutorial with id
 router.delete("/phieuthuhocphi/:sophieuhocphi", phieuthuhocphi.delete);

 // Delete all Tutorials
 router.delete("/phieuthuhocphi", phieuthuhocphi.deleteAll);

////////////////////////////////////////////////////////////////
const danhsachchuadonghocphi = require("../controllers/danhsachchuadonghocphi_controller.js");
// Create a new Tutorial
 router.post("/danhsachchuadonghocphi", danhsachchuadonghocphi.create);

 // Retrieve all Tutorials
 router.get("/danhsachchuadonghocphi", danhsachchuadonghocphi.findAll);

 // Retrieve a single Tutorial with id
 router.get("/danhsachchuadonghocphi/:mssv", danhsachchuadonghocphi.findOne);

 // Update a Tutorial with id
 router.put("/danhsachchuadonghocphi/:mssv",danhsachchuadonghocphi.update);

 // Delete a Tutorial with id
 router.delete("/danhsachchuadonghocphi/:mssv", danhsachchuadonghocphi.delete);

 // Delete all Tutorials
 router.delete("/danhsachchuadonghocphi", danhsachchuadonghocphi.deleteAll);

 const monhocdangkyhocphan = require("../controllers/monhocdangkyhocphan_controller.js");
 // Create a new Tutorial
  router.post("/monhocdangkyhocphan", monhocdangkyhocphan.create);
 
  // Retrieve all Tutorials
  router.get("/monhocdangkyhocphan", monhocdangkyhocphan.findAll);
 
  // Retrieve a single Tutorial with id
  router.get("/monhocdangkyhocphan/:sophieu", monhocdangkyhocphan.findOne);
 
  // Update a Tutorial with id
  router.put("/monhocdangkyhocphan/:sophieu",monhocdangkyhocphan.update);
 
  // Delete a Tutorial with id
  router.delete("/monhocdangkyhocphan/:sophieu", monhocdangkyhocphan.delete);
 
  // Delete all Tutorials
  router.delete("/monhocdangkyhocphan/", monhocdangkyhocphan.deleteAll);
 
  app.use('/api', router);
};
