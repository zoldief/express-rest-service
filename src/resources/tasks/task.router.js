const router = require('express').Router({ mergeParams: true });
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await taskService.getAll(boardId);
  // map user fields to exclude secret fields like "password"
  res
  .status(tasks ? 200 : 404)
  .json(tasks);
});

router.route('/').post(async (req, res) => {
  const { boardId } = req.params;
  const task = await taskService.createTask(boardId, req.body);
  res
    .status(task ? 201 : 400)
    .json(task);
})

router.route('/:taskId').get(async (req, res) => {
  const { taskId, boardId } = req.params;

  const task = await taskService.getTask(boardId, taskId);
  res
    .status(task ? 200 : 404)
    .json(task || {});
});

router.route('/:taskId').put(async (req, res) => {
  const {taskId, boardId} = req.params;
  const task = await taskService.updateTask(boardId, taskId, req.body);
  res
    .status(task ? 200 : 400)
    .json(task);
});

router.route('/:taskId').delete(async (req, res) => {
  const {taskId, boardId} = req.params;
  const task = await taskService.deleteTask(boardId, taskId);
  res
    .status(task !== -1 ? 204 : 404)
    .json();
});

module.exports = router;
