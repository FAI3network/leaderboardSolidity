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

export { top10Models };
