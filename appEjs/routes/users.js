var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Usuários' });
});

/* GET form to create a new user. */
router.get('/new', function(req, res, next) {
  res.render('newUser', { title: 'Novo Usuário' });
});

/* POST create a new user (demo). */
router.post('/create', function(req, res, next) {
  const nome = (req.body.nome || '').trim();
  const email = (req.body.email || '').trim();

  res.render('userCreated', {
    title: 'Usuário criado',
    nome: nome || 'Sem nome',
    email: email || 'não informado',
  });
});

module.exports = router;
