import User from '../models/User.js';
import express from 'express';

const user = express.Router(); // cria variáel express router (roteador)

    user.get('/cadastro', (req, res) => {  // primeiro argumento = rota, segundo argumento é a res (no get())
    const token = req.headers['token']
    const authData = verifyToken(token, res)
    })
    
    
    user.post('/register', async (req, res) => {
    const {name, email, pass} = req.body; // vai popular as constantes com o req.body.name, etc...
    
    const alreadyExistsUser = await User.findOne(
        { where: { email } }
    ).catch((err) => console.log("Error: ", err));

    if (alreadyExistsUser) {
        console.log("Usuário existente: " + alreadyExistsUser);
        res
            .status(409)
            .json({ message: "E-mail já utilizado por outro usuário"})
    }
    
    const newUser = new User({
        name: name,
        email: email,
        pass: pass
    })
    
    
    const savedUser = await newUser.save().catch((err) => {
            console.log("Error: ", err);
            res.status(500).json({ error: "Não foi possível cadastrar o usuário"});
        });

        if (savedUser) {
            console.log(savedUser);
            res.json({ message: "Cadastro realizado com sucesso!" })
    }
    
    });

export default user