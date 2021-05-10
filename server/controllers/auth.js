const User = require('../models').User;
const utils = require('../utils/crypt');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


module.exports = {

    async registerPatient(req, res) {
        const exist = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (exist) return res.status(409).send('User already exists');
        hashed = await utils.hash(req.body.password);
        return User
            .create({
                role: 'patient',
                email: req.body.email,
                gender: req.body.gender,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                phone: req.body.phone,
                city: req.body.city,
                address: req.body.address,
                password: hashed
            })
            .then((user) => { res.status(201).send(user) })
            .catch((error) => res.status(400).send(error));
    },
    async registerDoctor(req, res) {
        hashed = await utils.hash(req.body.password);
        return User
            .create({
                role: 'doctor',
                email: req.body.email,
                gender: req.body.gender,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                phone: req.body.phone,
                city: req.body.city,
                address: req.body.address,
                password: hashed
            })
            .then((user) => res.status(201).send(user))
            .catch((error) => res.status(400).send(error));
    },
    async login(req, res) {
        const invalidCredentials = 'Identifiant ou mot de passe invalide';
        const existingUser = await User.findOne({
            where: { email: req.body.email }
        });
        if (!existingUser) return res.status(401).send(invalidCredentials);
        const validPass = await bcrypt.compare(req.body.password, existingUser.password);
        if (!validPass) return res.status(401).send(invalidCredentials);
        
        const token = jwt.sign({id: existingUser.id}, process.env.TOKEN_SECRET,{ expiresIn: '30m' })
        return res.header('auth-token', token).send(token);
    },
};