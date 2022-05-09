const db = require('../models');
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send('Public Content.');
};

exports.userBoard = (req, res) => {
  User.findOne({
    where: {
      id: req.userId,
    },
  }).then((user) => {
    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }
    //TODO Move logic below to separate method and use it in auth.controller (68-78)
    //Notice: Here token is not needed, in auth - needed
    var authorities = [];
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        authorities.push('ROLE_' + roles[i].name.toUpperCase());
      }
      res.status(200).send({
        user: user,
        roles: authorities,
      });
    });
  });
};

exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.');
};
