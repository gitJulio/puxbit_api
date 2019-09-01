const pg = require('../../configuracion/ps_connection')
const jwt = require('jsonwebtoken')


exports.getLogin = async function(req, res, next) {



    let body = req.body;

    let caducidad;
    let usuario =
        await pg.func('public.ft_view_get_usuario', [body.email, body.password, body.dispositivo]).catch(err => {
            res.status(500).send({
                error: err,
                status: 500
            })
        })


    if (body.dispositivo == 1) {
        caducidad = process.env.CADUCIDAD_TOKEN_MOVIL
    } else {
        caducidad = process.env.CADUCIDAD_TOKEN_DESKTOP
    }

    if (usuario && usuario != '') {
        let token = jwt.sign({
            id: usuario[0].id_usuario,
            nivel: usuario[0].nivel,
            id_colegio: usuario[0].id_colegio,
            id_anio_escolar: usuario[0].id_anio_escolar,
            dispositivo: body.dispositivo
        }, process.env.SEED, {
            expiresIn: caducidad
        });

        await pg.func('public.ft_proc_insertar_token', [token, usuario[0].id_usuario, body.dispositivo]).catch(err => {
            res.status(500).send({
                error: err,
                status: 500
            })
        })

        res.send({
            ok: true,
            usuario: usuario[0].correo,
            token
        })
    } else {
        res.status(400).send({
            error: "usuario o contraseña invalidos"
        })
    }


}