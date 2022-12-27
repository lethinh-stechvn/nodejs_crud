const sql = require("./db.js");

// constructor
const Chuongtrinhhoc_model = function(chuongtrinhhoc) {
  this.nganhhoc = chuongtrinhhoc.nganhhoc;
  this.khoa = chuongtrinhhoc.khoa;
  this.hocky = chuongtrinhhoc.hocky;
  this.monhoc = chuongtrinhhoc.monhoc;
  this.ghichu = chuongtrinhhoc.ghichu;

};

Chuongtrinhhoc_model.create = (newChuongtrinhhoc_model, result) => {
  sql.query("INSERT INTO chuongtrinhhoc SET ?", newChuongtrinhhoc_model, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created chuongtrinhhoc: ", { nganhhoc: res.insertId, ...newChuongtrinhhoc_model });
    result(null, { nganhhoc: res.insertId, ...newChuongtrinhhoc_model });
  });
};

Chuongtrinhhoc_model.findById = (nganhhoc, result) => {
  sql.query(`SELECT * FROM chuongtrinhhoc WHERE nganhhoc = ${nganhhoc}`, (err, res) => {
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

Chuongtrinhhoc_model.getAll = (nganhhoc, result) => {
  let query = "SELECT * FROM chuongtrinhhoc";

  if (nganhhoc) {
    query += ` WHERE nganhhoc LIKE '%${nganhhoc}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("chuongtrinhhoc: ", res);
    result(null, res);
  });
};

Chuongtrinhhoc_model.updateById = (nganhhoc, chuongtrinhhoc, result) => {
  sql.query(
    "UPDATE chuongtrinhhoc SET  khoa = ?, hocky = ?, monhoc = ?, ghichu = ?  WHERE nganhhoc = ?",
    [chuongtrinhhoc.khoa, chuongtrinhhoc.hocky, chuongtrinhhoc.monhoc, chuongtrinhhoc.ghichu, nganhhoc],
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

      console.log("updated tutorial: ", { nganhhoc: nganhhoc, ...chuongtrinhhoc });
      result(null, { nganhhoc: nganhhoc, ...chuongtrinhhoc });
    }
  );
};

Chuongtrinhhoc_model.remove = (nganhhoc, result) => {
  sql.query("DELETE FROM chuongtrinhhoc WHERE nganhhoc = ?", nganhhoc, (err, res) => {
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

    console.log("deleted tutorial with nganhhoc: ", nganhhoc);
    result(null, res);
  });
};

Chuongtrinhhoc_model.removeAll = result => {
  sql.query("DELETE FROM chuongtrinhhoc", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} chuongtrinhhoc`);
    result(null, res);
  });
};

module.exports = Chuongtrinhhoc_model;
