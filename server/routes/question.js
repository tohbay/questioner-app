const express = require("express");

const router = express.Router();

const questions = [];
let id = 1;

router.get("/api/v1/questions", (req, res) => {
  return res.json({questions});
});

router.get("/api/v1/questions/:id", (req, res) => {
  const question = questions.find(val => val.id === Number(req.params.id));
  return res.json({question});
});

router.post("/api/v1/questions", (req, res) => {
  questions.push({
    id: ++id,
    createdOn: 10/10/2000,
    createdBy: req.body.user,
    meetup: req.body.meetup,
    title: req.body.title,
    body: req.body.body,
    votes: 0
  });
  return res.json({ 
    status: 200,
    message: "Successfully created" 
  });
});

router.patch("/api/v1/questions/:id/upvote", (req, res) => {
  const question = questions.find(val => val.id === Number(req.params.id));
  question.name = req.body.name;
  return res.json({ message: "Updated" });
});

router.patch("/api/v1/questions/:id/downvote", (req, res) => {
  const question = questions.find(val => val.id === Number(req.params.id));
  question.name = req.body.name;
  return res.json({ message: "Updated" });
});

router.delete("/api/v1/questions/:id", (req, res) => {
  const questionIndex = questions.findIndex(val => val.id === Number(req.param.id));
  questions.splice(questionIndex, 1);
  return res.json({ message: "Deleted" });
});

module.exports = router;