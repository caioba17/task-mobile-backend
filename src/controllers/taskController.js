import taskService from "../services/taskService.js";

async function List(req, res) {
  try {
    const user_id = req.params.user_id;
    const tasks = await taskService.List(user_id);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function Insert(req, res) {
  try {
    const task_title = req.body.task_title;
    const user_id = req.body.user_id;

    const task = await taskService.Insert(task_title, user_id);

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function Delete(req, res) {
  try {
    const task_id = req.params.task_id;
    const task = await taskService.Delete(task_id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function Edit(req, res) {
  try {
    const task_id = req.params.task_id;
    const task_title = req.body.task_title;
    const task = await taskService.Edit(task_id, task_title);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function Check(req, res) {
  try {
    const task_id = req.params.task_id;
    const task = await taskService.Check(task_id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function Uncheck(req, res) {
  try {
    const task_id = req.params.task_id;
    const task = await taskService.Uncheck(task_id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default { List, Insert, Delete, Edit, Check, Uncheck };
