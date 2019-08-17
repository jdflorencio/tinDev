const express = require('express')
const routes = express.Router()
const devController = require('./controllers/DevController')
const likeController = require('./controllers/LikeController')
const dislikeController = require('./controllers/DisLikeController')

// ROTAS
routes.get('/devs', devController.index )
routes.post('/devs', devController.store)
routes.post('/devs/:devId/likes', likeController.store)
routes.post('/devs/:devId/dislike', dislikeController.store)
routes.get('/', (req, res) => {
    return res.send('teste');
});

module.exports = routes