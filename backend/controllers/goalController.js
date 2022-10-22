const asyncHandler = require("express-async-handler");

const Goal = require("../model/goalsModel");

// @desc Get goals
// @route Get /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc Set goal
// @route Set /api/goal
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

// @desc Update goal
// @route Update /api/goal/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc Getgoal
// @route Get /api/goal/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("This goal does not exist");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
