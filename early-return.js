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
