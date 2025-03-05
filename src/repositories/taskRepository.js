import { execute } from "../database/sqlite.js";

async function List(user_id) {
  let sql = `SELECT * FROM tasks WHERE user_id = ? `;

  const tasks = await execute(sql, [user_id]);

  return tasks;
}

async function Insert(task_title, user_id) {
  let sql = `INSERT INTO tasks(task_title, task_status, user_id) VALUES (?, 0, ?) RETURNING task_id;`;
  const task = await execute(sql, [task_title, user_id]);

  return task[0];
}

async function Delete(task_id) {
  let sql = `DELETE FROM tasks WHERE task_id = ? `;
  await execute(sql, [task_id]);
  return { task_id };
}

async function Edit(task_id, task_title) {
  let sql = `UPDATE tasks SET task_title = ? WHERE task_id = ? `;
  await execute(sql, [task_title, task_id]);
  return { task_title, task_id };
}

async function Check(task_id) {
  let sql = `UPDATE tasks SET task_status = 1 WHERE task_id = ? `;
  await execute(sql, [task_id]);
  return { task_id };
}

async function Uncheck(task_id) {
  let sql = `UPDATE tasks SET task_status = 0 WHERE task_id = ? `;
  await execute(sql, [task_id]);
  return { task_id };
}

export default { List, Insert, Delete, Edit, Check, Uncheck };
