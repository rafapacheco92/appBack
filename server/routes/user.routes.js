import User from '../models/User.js';
import express from 'express';

const user = express.Router(); // cria variáel express router (roteador)

user.get('/find', async (req, res) => {  // primeiro argumento = rota, segundo argumento é a res (no get())
  const query = req.query.name
  const users = await User.findAll({
    where: {
      name: query
    }
  })
  res.json(users)
});


user.post('/cadastro', async (req, res) => {
  const { name, email, pass } = req.body; // vai popular as constantes com o req.body.name, etc...

  //para criar novos usuários no banco de dados

  const newUser = new User({
    name: name,
    email: email,
    pass: pass
  })

  const saveUser = async () => {
    const savedUser = await newUser.save()
    res.json(savedUser)
  }

  saveUser()

});




export default user