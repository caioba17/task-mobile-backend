import { execute } from "../database/sqlite.js";

async function Register(user_name, user_email, user_password) {
  let sql = `INSERT INTO users(user_name, user_email, user_password) VALUES (?, ?, ?) RETURNING user_id`;
  const user = await execute(sql, [user_name, user_email, user_password]);
  return user[0];
}

async function FindByEmail(user_email) {
  let sql = `SELECT * FROM users WHERE user_email = ?`;
  const user = await execute(sql, [user_email]);

  if (user.length == 0) return [];
  else return user[0];
}

export default { Register, FindByEmail };
