const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/allJokes', JokesController.findAllJokes);
    app.get('/api/allJokes/:id', JokesController.findOneSingleJoke);
    app.patch('/api/allJokes/:id', JokesController.updateExistingJokes);
    app.post('/api/allJokes', JokesController.createNewJoke);
    app.delete('/api/allJokes/:id', JokesController.deleteAnExistingJokes);
}
