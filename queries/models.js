const top10Models = `
query Top10ModelRegistereds {
  modelRegistereds(first: 10) {
    modelURI
    metrics
    numberOfInferences
    owner
    verifier
  }
}
`;
const modelById = `
query ModelById ($id: ID!){
  modelRegistered(id: $id) {
    owner
    numberOfInferences
    modelURI
  }
}
`;
export { top10Models, modelById };
