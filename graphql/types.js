import { gql } from 'apollo-server-express';
import { tiposUsuario } from '../models/user/user.types.js';


// import { tiposEnums } from '../models/enums/tipos.js';
// import { tiposProyecto } from '../models/proyecto/tipos.js';
// import { tiposAvance } from '../models/avance/tipos.js';
// import { tiposInscripcion } from '../models/inscripcion/tipos.js';
// import { tiposAutenticacion } from './auth/tipos.js';

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [
   tiposGlobales,
//   tiposEnums,
  tiposUsuario,
//   tiposProyecto,
//   tiposAvance,
//   tiposInscripcion,
//   tiposAutenticacion,

];