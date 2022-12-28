const sql = require("./db.js");

// constructor
const Dangkyhocphan_model = function(dangkyhocphan) {
  this.sophieu = dangkyhocphan.sophieu;
  this.mssv = dangkyhocphan.mssv;
  this.hocky = dangkyhocphan.hocky;
  this.ngaylap = dangkyhocphan.ngaylap;
  this.namhoc = dangkyhocphan.namhoc;

};

Dangkyhocphan_model.create = (newDangkyhocphan_model, result) => {
  sql.query("INSERT INTO dangkyhocphan SET ?", newDangkyhocphan_model, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created dangkyhocphan: ", { sophieu: res.insertId, ...newDangkyhocphan_model });
    result(null, { sophieu: res.insertId, ...newDangkyhocphan_model });
  });
};

Dangkyhocphan_model.findById = (sophieu, result) => {
  sql.query(`SELECT * FROM dangkyhocphan WHERE sophieu = ${sophieu}`, (err, res) => {
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

Dangkyhocphan_model.getAll = (sophieu, result) => {
  let query = "SELECT * FROM dangkyhocphan";

  if (sophieu) {
    query += ` WHERE sophieu LIKE '%${sophieu}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("dangkyhocphan: ", res);
    result(null, res);
  });
};

Dangkyhocphan_model.updateById = (sophieu, dangkyhocphan, result) => {
  sql.query(
    "UPDATE dangkyhocphan SET mssv = ?, ngaylap = ?, hocky = ?, namhoc = ?  WHERE sophieu = ?",
    [dangkyhocphan.mssv, dangkyhocphan.ngaylap, dangkyhocphan.hocky, dangkyhocphan.namhoc, sophieu],
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

      console.log("updated tutorial: ", { sophieu: sophieu, ...dangkyhocphan });
      result(null, { sophieu: sophieu, ...dangkyhocphan });
    }
  );
};

Dangkyhocphan_model.remove = (sophieu, result) => {
  sql.query("DELETE FROM dangkyhocphan WHERE sophieu = ?", sophieu, (err, res) => {
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

    console.log("deleted tutorial with sophieu: ", sophieu);
    result(null, res);
  });
};

Dangkyhocphan_model.removeAll = result => {
  sql.query("DELETE FROM dangkyhocphan", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} dangkyhocphan`);
    result(null, res);
  });
};

module.exports = Dangkyhocphan_model;
