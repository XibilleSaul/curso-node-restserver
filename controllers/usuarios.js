const { response, request } = require('express');

const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre, apikey } = req.query;

    res.json({
        msg: "get API - controller",
        q,
        nombre,
        apikey
    })
}

const usuariosPost = async (req, res = response) => {

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    //encript password
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    // save in db
    await usuario.save();

    res.json({
        usuario
    })
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: "put API - controller",
        id
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "patch API - controller"
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API - controller"
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}