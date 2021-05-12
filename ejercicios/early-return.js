// function getSubsanacionesCargasAsunto() {}
// function getSubsanacionesCargasBien() {}
// function getSubsanacionesCargasProcedimiento() {}

// function getSubsanaciones(CODIGO_ENTIDAD_ASUNTO, tipoEntidad) {
//   if (CODIGO_ENTIDAD_ASUNTO === tipoEntidad) {
//     return getSubsanacionesCargasAsunto(id);
//   }
//   if (CODIGO_ENTIDAD_BIEN === tipoEntidad) {
//     return getSubsanacionesCargasBien(id);
//   }
//   return getSubsanacionesCargasProcedimiento(id);
// }

const persona = {
  type: 'juridica',
  // type: 'fisica',
  ingresosAnuales: 20_000,
  deuda: 10_000,
  importeSolicitado: 10_000,
  estado: 'casado',
  // estado: 'soltero',
};

function isAptaParaUnCredito(persona) {
  if (persona.type === 'juridica') {
    return evaluatePersonaJuridica(persona);
  }
  if (persona.type === 'fisica') {
    return evaluatePersonaFisica(persona);
  }
  return false;
}

// function willItBlend(someObject) {
//   var itWillBlend;

//   if (typeof someObject === 'object') {
//     if (someObject.blendable === 'It will blend') {
//       itWillBlend = true;
//     } else {
//       itWillBlend = false;
//     }
//   } else {
//     itWillBlend = false;
//   }

//   return itWillBlend;
// }

function willItBlend(someObject) {
  if (!someObject) {
    return false;
  }
  if (typeof someObject !== 'object') {
    return false;
  }
  if (someObject.blendable === 'It will blend') {
    return true;
  }
  return false;
}

console.log(
  willItBlend({ blendable: 'It will blend' }) === true,
);
console.log(willItBlend({}) === false);
console.log(willItBlend([]) === false);
console.log(willItBlend(2) === false);
console.log(willItBlend(null) === false);
