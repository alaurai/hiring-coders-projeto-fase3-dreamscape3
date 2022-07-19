import bcrypt from 'bcryptjs';
import axios from 'axios';

import * as dotenv from 'dotenv';

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

class User {

    cadastraUser = async (req, res) => {

        nome = req.body.nome;
        lastname = req.body.lastname;
        city = req.body.city;
        email = req.body.email;
        password = req.body.password;

        this.password_hash = await bcrypt.hash(
            this.password, 10
        )

        let data = {
            nome,
            lastname,
            city,
            email,
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

    alteraUsuario = async (req, res) => {
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

    getUsuarioId = (req, res) => {


        instancia.get(`/dataentities/FM/documents/${req.params.id}`)
            .then(() => console.log('Success')).catch((err) => console.log(err));

        return res.json("Okay")


    }

    getUsuarioEmail = async (email) => {

        const resultado = await instancia.get(`/dataentities/CL/search?email=${email}&_fields=createdIn`)
            .then(async response => {
                return response.data[0].createdIn;
            })
            .catch(_ => {
                console.log('erro')

                return ("erro");

            })

        return resultado;

    }


    checkPassword = (password, hash) => {
        return bcrypt.compare(password, hash);
    }

    getOrderIdApproved = async (req, res) => {
        let email = req.body.email
        let createdIn = await this.getUsuarioEmail(email);

        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);

        let dataAtual = today.toISOString();

        // console.log(dataAtual, createdIn);

        // instancia.get(`/oms/pvt/orders?q=${email}&f_creationDate=creationDate:[ ${createdIn} TO ${dataAtual} ]`).then(response => {
        instancia.get(`/oms/pvt/orders?q=${email}`).then(response => {
            let arrayValores = response.data.list.map(element => parseInt(`${element.totalValue}`.slice(0, -2)))
            let arraFinal = arrayValores.reduce((acumulador, elemento) => {
                return acumulador + elemento
            }, 0);

            return res.json({
                email,
                totalPontos: arraFinal
            });


        }).catch(err => res.json("Erro"))

        // return res.json("Okay")
    }

}

// https://dreamscape.vtexcommercestable.com.br/api/oms/pvt/orders?orderBy=orderId,desc
// https://dreamscape.vtexcommercestable.com.br/api/oms/pvt/orders/{orderId}/payment-transaction
// https://developers.vtex.com/vtex-rest-api/reference/userorderslist
// https://dreamscape.vtexcommercestable.com.br/api/oms/pvt/orders?q=davidson.xavierti@gmail.com&f_creationDate=creationDate:[2022-07-17T02:00:00.000Z TO 2022-07-19T01:59:59.999Z]

// const dados = JSON.parse(localStorage.getItem('orderform')).clientProfileData.email

export default new User;