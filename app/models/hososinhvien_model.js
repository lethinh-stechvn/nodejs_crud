const sql = require("./db.js");

// constructor
const Hososinhvien_model = function(hososinhvien) {
  this.mssv = hososinhvien.mssv;
  this.hoten = hososinhvien.hoten;
  this.ngaysinh = hososinhvien.ngaysinh;
  this.gioitinh = hososinhvien.gioitinh;
  this.quequan = hososinhvien.quequan;
  this.doituong = hososinhvien.doituong;
  this.nganhhoc = hososinhvien.nganhhoc; 

};

Hososinhvien_model.create = (newHososinhvien_model, result) => {
  sql.query("INSERT INTO hososinhvien SET ?", newHososinhvien_model, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created hososinhvien: ", { mssv: res.insertId, ...newHososinhvien_model });
    result(null, { mssv: res.insertId, ...newHososinhvien_model });
  });
};

Hososinhvien_model.findById = (mssv, result) => {
  sql.query(`SELECT * FROM hososinhvien WHERE mssv = ${mssv}`, (err, res) => {
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

Hososinhvien_model.getAll = (mssv, result) => {
  let query = "SELECT * FROM hososinhvien";

  if (mssv) {
    query += ` WHERE mssv LIKE '%${mssv}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("hososinhvien: ", res);
    result(null, res);
  });
};

Hososinhvien_model.updateById = (mssv, hososinhvien, result) => {
  sql.query(
    "UPDATE hososinhvien SET hoten = ?, ngaysinh = ?, gioitinh = ?, quequan = ?, doituong = ?, nganhhoc = ? WHERE mssv = ?",
    [hososinhvien.hoten, hososinhvien.ngaysinh, hososinhvien.gioitinh, hososinhvien.quequan, hososinhvien.doituong, hososinhvien.nganhhoc, mssv],
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

      console.log("updated tutorial: ", { mssv: mssv, ...hososinhvien });
      result(null, { mssv: mssv, ...hososinhvien });
    }
  );
};

Hososinhvien_model.remove = (mssv, result) => {
  sql.query("DELETE FROM hososinhvien WHERE mssv = ?", mssv, (err, res) => {
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

Hososinhvien_model.removeAll = result => {
  sql.query("DELETE FROM hososinhvien", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} hososinhvien`);
    result(null, res);
  });
};

module.exports = Hososinhvien_model;
