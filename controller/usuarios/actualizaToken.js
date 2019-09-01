const pg = require('../../configuracion/ps_connection')
const jwt = require('jsonwebtoken')


exports.actualizaToken = async function(req, res, next) {

    let tokenActualizado;
    let usuario =
        await pg.func('public.ft_proc_actualiza_token', [req.body.token]).catch(err => {
            res.status(500).send({
                error: err,
                status: 500
            })
        })
    console.log(usuario);


    if (usuario.length > 0) {
        let token = jwt.sign({
            id: usuario[0].id_usuario,
            nivel: usuario[0].nivel,
            id_colegio: usuario[0].id_colegio
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN_DESKTOP });

        tokenActualizado = await pg.func('public.ft_proc_insertar_token', [token, usuario[0].id_usuario]).catch(err => {
            res.status(500).send({
                error: err,
                status: 500
            })
        })

        res.send({ token: tokenActualizado[0]["ft_proc_insertar_token"] })

    } else {
        res.send({
            status: false
        })
    }

}