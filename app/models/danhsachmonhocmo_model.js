const sql = require("./db.js");

// constructor
const Danhsachmonhocmo_model = function(danhsachmonhocmo) {
  this.stt = danhsachmonhocmo.stt;
  this.namhoc = danhsachmonhocmo.namhoc;
  this.hocky = danhsachmonhocmo.hocky;
  this.monhoc = danhsachmonhocmo.monhoc;
};

Danhsachmonhocmo_model.create = (newDanhsachmonhocmo_model, result) => {
  sql.query("INSERT INTO danhsachmonhocmo SET ?", newDanhsachmonhocmo_model, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created danhsachmonhocmo: ", { stt: res.insertId, ...newDanhsachmonhocmo_model });
    result(null, { stt: res.insertId, ...newDanhsachmonhocmo_model });
  });
};

Danhsachmonhocmo_model.findById = (stt, result) => {
  sql.query(`SELECT * FROM danhsachmonhocmo WHERE stt = ${stt}`, (err, res) => {
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

Danhsachmonhocmo_model.getAll = (stt, result) => {
  let query = "SELECT * FROM danhsachmonhocmo";

  if (stt) {
    query += ` WHERE stt LIKE '%${stt}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("danhsachmonhocmo: ", res);
    result(null, res);
  });
};

Danhsachmonhocmo_model.updateById = (stt, danhsachmonhocmo, result) => {
  sql.query(
    "UPDATE danhsachmonhocmo SET  hocky = ?, namhoc = ?,monhoc = ? WHERE stt = ?",
    [ danhsachmonhocmo.hocky, danhsachmonhocmo.namhoc, danhsachmonhocmo.monhoc,  stt],
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

      console.log("updated tutorial: ", { stt: stt, ...danhsachmonhocmo });
      result(null, { stt: stt, ...danhsachmonhocmo });
    }
  );
};

Danhsachmonhocmo_model.remove = (stt, result) => {
  sql.query("DELETE FROM danhsachmonhocmo WHERE stt = ?", stt, (err, res) => {
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

    console.log("deleted tutorial with stt: ", stt);
    result(null, res);
  });
};

Danhsachmonhocmo_model.removeAll = result => {
  sql.query("DELETE FROM danhsachmonhocmo", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} danhsachmonhocmo`);
    result(null, res);
  });
};

module.exports = Danhsachmonhocmo_model;
