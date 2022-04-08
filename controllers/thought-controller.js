const { Thought, User } = require('../models');




const thoughtController = {
    //get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },
    // get one thought by id
    getThoughtID({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
            .then((dbThoughtData) =>
                res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(404).json(err);
            });
    },
    //create thought
    createThought({ params, body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this username!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
    //delete Thought
    deleteThought({ body }, res) {
        Thought.findOneAndDelete({ _id: body._id })
            .then((deletedThought) => {
                if (!deletedThought) {
                    return res.status(404).json({ message: "No thought with this id!" });
                }
                return User.findOneAndUpdate(
                    { _id: dbThoughtData.userId },
                    { $pull: { thoughts: { _id: body._id } } },
                    { new: true }
                );
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    res.status(404).json({ message: "No user found with this id!" });
                    return;
                }
                res.json({ message: "Thought has been deleted." });
            })
            .catch((err) => res.json(err));
    },
    //add reaction
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought with this ID!' });
                    return;
                }
                res.json(dbThoughtData)
            })
            .catch(err => res.json(err));
    },
    //delete Reaction
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    },

    // update thought by id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'no Thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);

            })
            .catch(err => res.status(400).json(err));
    },
    
}


module.exports = thoughtController;