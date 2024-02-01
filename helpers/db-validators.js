const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if(!existeRol) {
        throw new Error(`El rol ${ rol } no esta registrado en la BD`);
    }
}

//Verify if email exist
const esEmailValido = async(correo = '')  => {
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El email ${ correo } ya esta registrado en la BD`);
    }
}

module.exports = {
    esRoleValido,
    esEmailValido
};