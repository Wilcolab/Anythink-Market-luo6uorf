/**
 * @module routes/api/comments
 * @description Express router for handling comment-related endpoints.
 */

 /**
    * GET /
    * @summary Retrieve all comments.
    * @route GET /
    * @returns {Object} 200 - An object containing an array of comments.
    * @returns {Error}  default - Unexpected error
    */

 /**
    * DELETE /:id
    * @summary Delete a comment by its ID.
    * @route DELETE /:id
    * @param {string} id.path.required - The ID of the comment to delete.
    * @returns {Object} 200 - Success message if comment is deleted.
    * @returns {Error} 404 - Comment not found.
    * @returns {Error} default - Unexpected error
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get( "/", function (req, res, next) {
  Comment.find()
    .then(function (comments) {
      return res.json({ comments: comments });
    })
    .catch(next);
});

//add another endpoint to delete a comment
router.delete("/:id", async function (req, res, next) {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        return res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        next(err);
    }
});