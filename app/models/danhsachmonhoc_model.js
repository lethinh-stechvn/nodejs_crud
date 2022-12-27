const sql = require("./db.js");

// constructor
const Danhsachmonhoc_model = function(danhsachmonhoc) {
  this.mamonhoc = danhsachmonhoc.mamonhoc;
  this.tenmonhoc = danhsachmonhoc.tenmonhoc;
  this.loaimonhoc = danhsachmonhoc.loaimonhoc;
  this.sotiet = danhsachmonhoc.sotiet;

};

Danhsachmonhoc_model.create = (newDanhsachmonhoc_model, result) => {
  sql.query("INSERT INTO danhsachmonhoc SET ?", newDanhsachmonhoc_model, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created danhsachmonhoc: ", { mamonhoc: res.insertId, ...newDanhsachmonhoc_model });
    result(null, { mamonhoc: res.insertId, ...newDanhsachmonhoc_model });
  });
};

Danhsachmonhoc_model.findById = (mamonhoc, result) => {
  sql.query(`SELECT * FROM danhsachmonhoc WHERE mamonhoc = ${mamonhoc}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Danhsachmonhoc_model.getAll = (mamonhoc, result) => {
  let query = "SELECT * FROM danhsachmonhoc";

  if (mamonhoc) {
    query += ` WHERE mamonhoc LIKE '%${mamonhoc}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("danhsachmonhoc: ", res);
    result(null, res);
  });
};

Danhsachmonhoc_model.updateById = (mamonhoc, danhsachmonhoc, result) => {
  sql.query(
    "UPDATE danhsachmonhoc SET  tenmonhoc = ?, loaimonhoc = ?, sotiet = ? WHERE mamonhoc = ?",
    [danhsachmonhoc.tenmonhoc, danhsachmonhoc.loaimonhoc, danhsachmonhoc.sotiet, mamonhoc],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated tutorial: ", { mamonhoc: mamonhoc, ...danhsachmonhoc });
      result(null, { mamonhoc: mamonhoc, ...danhsachmonhoc });
    }
  );
};

Danhsachmonhoc_model.remove = (mamonhoc, result) => {
  sql.query("DELETE FROM danhsachmonhoc WHERE mamonhoc = ?", mamonhoc, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with mamonhoc: ", mamonhoc);
    result(null, res);
  });
};

Danhsachmonhoc_model.removeAll = result => {
  sql.query("DELETE FROM danhsachmonhoc", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} danhsachmonhoc`);
    result(null, res);
  });
};

module.exports = Danhsachmonhoc_model;
