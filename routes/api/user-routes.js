const router = require('express').Router();
const {
    getAllUsers,
    getUserbyID,
    createUser,
    addFriend,
    updateUser,
    deleteUser,
    removeFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUserbyID)
    .put(updateUser)
    .delete(deleteUser)

router
    .route('/:userId/friends/:Id')
    .post(addFriend)
    .put(removeFriend)

module.exports = router;