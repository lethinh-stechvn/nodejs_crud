const sql = require("./db.js");

// constructor
const Monhocdangkyhocphan_model = function(monhocdangkyhocphan) {
  this.sophieu = monhocdangkyhocphan.sophieu;

  this.tenmonhoc = monhocdangkyhocphan.tenmonhoc;
  this.sotinchi = monhocdangkyhocphan.sotinchi;

};

Monhocdangkyhocphan_model.create = (newMonhocdangkyhocphan_model, result) => {
  sql.query("INSERT INTO monhocdangkyhocphan SET ?", newMonhocdangkyhocphan_model, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created monhocdangkyhocphan: ", { sophieu: res.insertId, ...newMonhocdangkyhocphan_model });
    result(null, { sophieu: res.insertId, ...newMonhocdangkyhocphan_model });
  });
};

Monhocdangkyhocphan_model.findById = (sophieu, result) => {
  sql.query(`SELECT * FROM monhocdangkyhocphan WHERE sophieu = ${sophieu}`, (err, res) => {
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

Monhocdangkyhocphan_model.getAll = (sophieu, result) => {
  let query = "SELECT * FROM monhocdangkyhocphan";

  if (sophieu) {
    query += ` WHERE sophieu LIKE '%${sophieu}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("monhocdangkyhocphan: ", res);
    result(null, res);
  });
};

Monhocdangkyhocphan_model.updateById = (sophieu, monhocdangkyhocphan, result) => {
  sql.query(
    "UPDATE monhocdangkyhocphan SET  tenmonhoc = ?, sotinchi = ?  WHERE sophieu = ?",
    [monhocdangkyhocphan.tenmonhoc, monhocdangkyhocphan.sotinchi, sophieu],
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

      console.log("updated tutorial: ", { sophieu: sophieu, ...monhocdangkyhocphan });
      result(null, { sophieu: sophieu, ...monhocdangkyhocphan });
    }
  );
};

Monhocdangkyhocphan_model.remove = (sophieu, result) => {
  sql.query("DELETE FROM monhocdangkyhocphan WHERE sophieu = ?", sophieu, (err, res) => {
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

Monhocdangkyhocphan_model.removeAll = result => {
  sql.query("DELETE FROM monhocdangkyhocphan", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} monhocdangkyhocphan`);
    result(null, res);
  });
};

module.exports = Monhocdangkyhocphan_model;
