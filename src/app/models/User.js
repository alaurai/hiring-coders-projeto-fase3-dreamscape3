import bcrypt from 'bcryptjs';
import axios from 'axios';

import * as dotenv from 'dotenv';
import { response } from 'express';

dotenv.config();



const instancia = axios.create({
    baseURL: 'https://dreamscape.vtexcommercestable.com.br/api',
    timeout: 1000,
    headers: {
        "Content-type": "application/json",
        "x-vtex-api-appKey": process.env.X_VTEX_API_AppKey,
        "x-vtex-api-appToken": process.env.VTEX_API_TOKEN
    }

})
// const instancia01 = axios.create({
//     baseURL: 'https://dreamscape.vtexcommercestable.com.br/api',
//     timeout: 1000,
//     headers: {
//         "Content-type": "application/json",
//         "x-vtex-api-apptoken": process.env.VTEX_API_TOKEN
//     }

// })


class User {

    async cadastraUser(req, res) {
        // console.log(req.body);
        let password = await bcrypt.hash(req.body.password, 10).then(hash => hash);
        let data = {
            nome: req.body.nome,
            lastname: req.body.lastname,
            city: req.body.city,
            email: req.body.email,
            password
        }
        instancia.post('/dataentities/FM/documents/', data).then(() => {
            res.status(201);
            console.log('Usuário Criado');
            return res.json(
                data
            );
        })
            .catch(err => console.log('erro'));

    }

    async alteraUsuario(req, res) {
        let password = await bcrypt.hash(req.body.password, 10).then(hash => hash);
        let data = {
            nome: req.body.nome,
            lastname: req.body.lastname,
            city: req.body.city,
            email: req.body.email,
            password
        }

        instancia.put(`/dataentities/FM/documents/${req.params.id}`, data)
            .then(_ => {
                console.log('success');
                return res.json(
                    data
                )
            })
            .catch(_ => {
                console.log('erro')
                return res.json('erro')
            })


    }

    async getUsuarioId(req, res) {


        axios.get(`https://davidson01--dreamscape.myvtex.com/api/dataentities/FM/documents/${req.params.id}`, {}, {
            headers: {
                "Content-type": "application/json",
                "x-vtex-api-apptoken": process.env.VTEX_API_TOKEN
            }
        }).then(res => console.log(res)).catch(err => console.log(err))

        // instancia.get(`/dataentities/FM/documents/${req.params.id}`)
        //     .then(() => console.log('Success')).catch((err) => console.log(err));

        return res.json("Okay")


    }

    async getUsuarioEmail(req, res) {
        instancia.get(`/dataentities/FM/search?nome=${req.query.nome}&_fields=_all`)
            .then(response => {
                return res.json(response.data)
            })
            .catch(err => {
                console.log('erro')
                res.status(403);

                return res.json("erro");

            })

    }

    async checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}

export default new User;