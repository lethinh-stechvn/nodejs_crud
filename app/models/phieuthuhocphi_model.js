const sql = require("./db.js");

// constructor
const Phieuthuhocphi_model = function(phieuthuhocphi) {
  this.sophieuhocphi = phieuthuhocphi.sophieuhocphi;
  this.mssv = phieuthuhocphi.mssv;
  this.ngaylap = phieuthuhocphi.ngaylap;
  this.sotienthu = phieuthuhocphi.sotienthu;

};

Phieuthuhocphi_model.create = (newPhieuthuhocphi_model, result) => {
  sql.query("INSERT INTO phieuthuhocphi SET ?", newPhieuthuhocphi_model, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created phieuthuhocphi: ", { sophieuhocphi: res.insertId, ...newPhieuthuhocphi_model });
    result(null, { sophieuhocphi: res.insertId, ...newPhieuthuhocphi_model });
  });
};

Phieuthuhocphi_model.findById = (sophieuhocphi, result) => {
  sql.query(`SELECT * FROM phieuthuhocphi WHERE sophieuhocphi = ${sophieuhocphi}`, (err, res) => {
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

Phieuthuhocphi_model.getAll = (sophieuhocphi, result) => {
  let query = "SELECT * FROM phieuthuhocphi";

  if (sophieuhocphi) {
    query += ` WHERE sophieuhocphi LIKE '%${sophieuhocphi}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("phieuthuhocphi: ", res);
    result(null, res);
  });
};

Phieuthuhocphi_model.updateById = (sophieuhocphi, phieuthuhocphi, result) => {
  sql.query(
    "UPDATE phieuthuhocphi SET  mssv = ?, namhoc = ?, hocky = ?, sotiendangky = ?, sotienphaidong = ?, sotienconlai = ? WHERE sophieuhocphi = ?",
    [phieuthuhocphi.namhoc, phieuthuhocphi.hocky, phieuthuhocphi.sotiendangky, phieuthuhocphi.sotienphaidong, phieuthuhocphi.sotienconlai],
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

      console.log("updated tutorial: ", { sophieuhocphi: sophieuhocphi, ...phieuthuhocphi });
      result(null, { sophieuhocphi: sophieuhocphi, ...phieuthuhocphi });
    }
  );
};

Phieuthuhocphi_model.remove = (sophieuhocphi, result) => {
  sql.query("DELETE FROM phieuthuhocphi WHERE sophieuhocphi = ?", sophieuhocphi, (err, res) => {
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

    console.log("deleted tutorial with sophieuhocphi: ", sophieuhocphi);
    result(null, res);
  });
};

Phieuthuhocphi_model.removeAll = result => {
  sql.query("DELETE FROM phieuthuhocphi", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} phieuthuhocphi`);
    result(null, res);
  });
};

module.exports = Phieuthuhocphi_model;
