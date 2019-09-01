const pg = require('../../configuracion/ps_connection')



exports.getDataUsuario = async function(req, res, next) {




    let dataUsuario;
    dataUsuario = await pg.func('public.ft_view_data_profesor', process.env.id_usuario).catch(err => {
        console.log(err);
        res.send({
            status: false
        })
    })

    if (res.statusCode != 200) {
        return
    }

    if (dataUsuario.length == 0) {
        res.send({
            status: false
        })
    } else {
        res.send(dataUsuario[0]["ft_view_data_profesor"])
    }

}