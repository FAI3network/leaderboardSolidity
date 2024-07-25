const metricsHistory = `
query MetricsHistory($verif: Bytes) {
  metricsRuns(
    first: 3
    where: {verifier: $verif}
  ) {
    blockNumber
    blockTimestamp
    metrics
  }
}`;

export { metricsHistory };
