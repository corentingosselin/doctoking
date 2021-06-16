const User = require('../models').User;
const DoctorTitle = require('../models').DoctorTitle;

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
        if (exist) return res.status(409).json({
            'message': "L'utilisateur existe déjà"
        });
        if (req.body.password != req.body.confirm_password) {
            return res.status(409).json({
                'message': "Les mots de passe ne correspondent pas"
            });
        }
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
            .then((user) => {
                res.status(201).json({
                    'message': "User created"
                });
            })
            .catch((error) => res.status(400).send(error));
    },
    async registerDoctor(req, res) {
        const exist = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (exist) return res.status(409).json({
            'message': "L'utilisateur existe déjà"
        });
        if (req.body.password != req.body.confirm_password) {
            return res.status(409).json({
                'message': "Les mots de passe ne correspondent pas"
            });
        }
        hashed = await utils.hash(req.body.password);
        try {
            const user = await User
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
                });
            const doctortitle = await DoctorTitle.create({
                doctorId: user.id,
                titleId: req.body.title
            });
            return res.status(201).json({
                'role': user.role,
                'email': user.email,
                'name': user.first_name,
                'surname': user.last_name,
                'phone': user.phone,
                'city': user.city,
                'address': req.body.address,
                'id': user.id
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                'message': "Une erreur s'est produite lors de la création"
            });
        }

    },
    async login(req, res) {
        const invalidCredentials = 'Identifiant ou mot de passe invalide';
        let existingUser = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!existingUser) return res.status(401).json({
            'message': invalidCredentials
        });
        const validPass = await bcrypt.compare(req.body.password, existingUser.password);
        if (!validPass) return res.status(401).json({
            'message': invalidCredentials
        });
        const token = jwt.sign({ id: existingUser.id }, process.env.TOKEN_SECRET, { expiresIn: '30m' })
        const user = existingUser.toJSON();
        user.token = token;
        return res.status(200).json({
            'role': user.role,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'phone': user.phone,
            'city': user.city,
            'address': user.address,
            'id': user.id,
            'token': token
        });
        //return res.status(200).send(user);
        //return res.header('auth-token', token).send(token);
    },
};