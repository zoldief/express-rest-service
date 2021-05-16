const router = require('express').Router({ mergeParams: true });
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  // map user fields to exclude secret fields like "password"
  res
  .status(boards ? 200 : 404)
  .json(boards.map(Board.toResponse));
});

router.route('/').post(async (req, res) => {
  const newBoard = await boardsService.createBoard(req.body);
  res
  .status(newBoard ? 201 : 404)
  .json(Board.toResponse(newBoard));
})

router.route('/:boardId').get(async (req, res) => {
  const { boardId } = req.params;
  const board = await boardsService.getBoard(boardId);
  res
    .status(board ? 200: 404)
    .json(board? Board.toResponse(board) : {});
})

router.route('/:boardId').put(async (req, res) => {
  const { boardId } = req.params;
  const board = await boardsService.updateBoard(boardId, req.body);
  res
    .status(board ? 200: 404)
    .json(board? Board.toResponse(board) : {});
})

router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params;
  const board = await boardsService.deleteBoard(boardId);
  res
     .status(board !== -1 ? 204 : 404)
     .json();
})

module.exports = router;
