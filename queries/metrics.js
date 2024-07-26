const metricsHistory = `
query MetricsHistory($verif: Bytes) {
  metricsRuns(
    first: 3
    where: {verifier: $verif}
    orderBy: blockNumber
  ) {
    blockNumber
    blockTimestamp
    metrics
  }
}`;

export { metricsHistory };
