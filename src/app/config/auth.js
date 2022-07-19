import dotenv from 'dotenv';
dotenv.config();

const authConfig = (req, res, next) => {
    let secret = process.env.token_acesso_api;
    if (!req.headers.authorization) {
        res.status(401);
        return res.json("Usuario nao Autenticado");
    }
    else if (req.headers.authorization !== secret) {
        res.status(403);
        return res.json("Chaves incorreta");

    }
    else {
        next();
    }
}


export default authConfig;