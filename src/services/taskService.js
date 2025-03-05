import taskRepository from "../repositories/taskRepository.js";

async function List(user_id) {
  const tasks = await taskRepository.List(user_id);
  return tasks;
}

async function Insert(task_title, user_id) {
  const task = await taskRepository.Insert(task_title, user_id);
  return task;
}

async function Delete(task_id) {
  const task = await taskRepository.Delete(task_id);
  return task;
}

async function Edit(task_id, task_title) {
  const task = await taskRepository.Edit(task_id, task_title);
  return task;
}

async function Check(task_id) {
  const task = await taskRepository.Check(task_id);
  return task;
}

async function Uncheck(task_id) {
  const task = await taskRepository.Uncheck(task_id);
  return task;
}

export default { List, Insert, Delete, Edit, Check, Uncheck };
