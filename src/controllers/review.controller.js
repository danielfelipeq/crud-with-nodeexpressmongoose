const Review = require("../models/review.model");

module.exports = {
    
    // POST

    create(req, res) {
        const data = req.body;
        const newReview = {
            ...data
        }
        Review.create(newReview)
            .then(review => {
                res.status(200).json({ message: "Review created successfully", data: review });
            })
            .catch((err) => {
                res.status(400).json({ message: "Error creating review", data: err });
            });
    },

    // GET

    list(req, res) {
        Review.find()
            .then(reviews => {
                res.status(200).json({ message: "Users listed successfully", data: reviews });
            })
            .catch((err) => {
                res.status(404).json({ message: "Error listing reviews", data: err });
            });
    },

    // GET :id

    show(req, res) {
        const {reviewId} = req.params;
        Review.findById(reviewId)
          .then((review) => {
            res.status(200).json({ message: "Review listed successfully", data: review });
          })
          .catch((err) => {
            res.status(404).json({ message: "Error listing Review", data: err });
          })
      },

    // PUT

    update(req, res) {
        const {reviewId} = req.params;
        Review.findByIdAndUpdate(reviewId, req.body, {new: true})
        .then(review => {
            res.status(200).json({ message: "Review updated", data: review });
        })
        .catch((err) => {
            res.status(404).json({ message: "Error updating", data: err})
        })
    },

    // DELETE

    destroy(req, res) {
        const {reviewId} = req.params;
        Review.findByIdAndDelete(reviewId)
        .then((review) => {
            res.status(200).json({ message: "Review deleted", data: review });
        })
        .catch((err) => {
            res.status(404).json({ message: "Error deleting", data: err})
        })
    }

}