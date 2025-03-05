import sqlite3 from "sqlite3";

const SQlite = sqlite3.verbose();

const db = new SQlite.Database(
  "./src/database/banco_tasks.db",
  SQlite.OPEN_READWRITE,
  (err) => {
    if (err) {
      return console.log("Database error: " + err.message);
    } else {
      return console.log("Database connected");
    }
  }
);

function execute(command, params, method = "all") {
  return new Promise((resolve, reject) => {
    db[method](command, params, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });
}

export { db, execute };
