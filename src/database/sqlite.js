import sqlite3 from "sqlite3";
import path from "path";

const SQlite = sqlite3.verbose();

const dbPath = path.resolve("./src/database/banco_tasks.db");
console.log("Database path:", dbPath); // Para verificar se o caminho é resolvido corretamente

const db = new SQlite.Database(dbPath, SQlite.OPEN_READWRITE, (err) => {
  if (err) {
    console.log("Database error: " + err.message);
  } else {
    console.log("Database connected");
  }
});

function execute(command, params, method = "all") {
  return new Promise((resolve, reject) => {
    db[method](command, params, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });
}

export { db, execute };
