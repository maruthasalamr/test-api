module.exports = app => {

     const controller001 = require('../controllers/index0001');

    app.post('/api/v1/users/add_users',controller001.postAddusers);
    app.get('/api/v1/users/:id', controller001.getUser);
    app.delete('/api/v1/users/delete_user/:id',controller001.removeUser);
}