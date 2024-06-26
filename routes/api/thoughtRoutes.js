const router = require("express").Router();
const {
  getThoughts,
  getThought,
  updateThought,
  deleteThought,
  createThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;