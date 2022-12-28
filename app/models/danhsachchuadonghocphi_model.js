const sql = require("./db.js");

// constructor
const Danhsachchuadonghocphi_model = function(danhsachchuadonghocphi) {
  this.stt = danhsachchuadonghocphi.stt;
  this.mssv = danhsachchuadonghocphi.mssv;
  this.namhoc = danhsachchuadonghocphi.namhoc;
  this.hocky = danhsachchuadonghocphi.hocky;
  this.mssv = danhsachchuadonghocphi.mssv;
  this.sotiendangky = danhsachchuadonghocphi.sotiendangky;
  this.sotienphaidong = danhsachchuadonghocphi.sotienphaidong;
  this.sotienconlai = danhsachchuadonghocphi.sotienconlai;

};

Danhsachchuadonghocphi_model.create = (newDanhsachchuadonghocphi_model, result) => {
  sql.query("INSERT INTO danhsachchuadonghocphi SET ?", newDanhsachchuadonghocphi_model, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created danhsachchuadonghocphi: ", { mssv: res.insertId, ...newDanhsachchuadonghocphi_model });
    result(null, { mssv: res.insertId, ...newDanhsachchuadonghocphi_model });
  });
};

Danhsachchuadonghocphi_model.findById = (mssv, result) => {
  sql.query(`SELECT * FROM danhsachchuadonghocphi WHERE mssv = ${mssv}`, (err, res) => {
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

Danhsachchuadonghocphi_model.getAll = (mssv, result) => {
  let query = "SELECT * FROM danhsachchuadonghocphi";

  if (mssv) {
    query += ` WHERE mssv LIKE '%${mssv}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("danhsachchuadonghocphi: ", res);
    result(null, res);
  });
};

Danhsachchuadonghocphi_model.updateById = (mssv, danhsachchuadonghocphi, result) => {
  sql.query(
    "UPDATE danhsachchuadonghocphi SET namhoc = ?, hocky = ?, sotiendangky = ?, sotienphaidong = ? , sotienconlai = ? WHERE mssv = ?",
    [danhsachchuadonghocphi.namhoc, danhsachchuadonghocphi.hocky, danhsachchuadonghocphi.sotiendangky, danhsachchuadonghocphi.sotienphaidong, danhsachchuadonghocphi.sotienconlai, mssv],
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

      console.log("updated tutorial: ", { mssv: mssv, ...danhsachchuadonghocphi });
      result(null, { mssv: mssv, ...danhsachchuadonghocphi });
    }
  );
};

Danhsachchuadonghocphi_model.remove = (mssv, result) => {
  sql.query("DELETE FROM danhsachchuadonghocphi WHERE mssv = ?", mssv, (err, res) => {
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

    console.log("deleted tutorial with mssv: ", mssv);
    result(null, res);
  });
};

Danhsachchuadonghocphi_model.removeAll = result => {
  sql.query("DELETE FROM danhsachchuadonghocphi", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} danhsachchuadonghocphi`);
    result(null, res);
  });
};

module.exports = Danhsachchuadonghocphi_model;
