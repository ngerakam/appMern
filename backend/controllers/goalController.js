const asyncHandler = require("express-async-handler");
// @desc Get goals
// @route Get /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc Set goal
// @route Set /api/goal
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter a text field");
  }
  res.status(200).json({ message: "This is to set goal response" });
});

// @desc Update goal
// @route Update /api/goal/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
});

// @desc Getgoal
// @route Get /api/goal/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` });
});
module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
