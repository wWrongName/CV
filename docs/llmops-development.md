# LLMOps development scope

Implemented according to the owner: LLM project with Angie as the entry proxy, without Kubernetes or Kong. The inference runtime and monitoring stack still need confirmation. Langfuse is not yet deployed.

## Integration design

- Instrument application calls in self-hosted Langfuse; correlate traces with model and prompt versions.
- Mask sensitive input before exporting traces and set access and retention policies.
- Maintain a versioned dataset of representative tasks with expected outputs or scoring criteria.
- Compare proposed changes with the current version on the same dataset. Calibrate automated scores with human review; define acceptance thresholds per task.
- Record latency distributions, errors and token usage. Track time to first token for streaming responses. If vLLM is used, collect its inference metrics; token counts are not a measurement of GPU costs.
- Version prompt and application configurations together and test rollback before release.

These are design requirements, not claims of completed implementation or measured business improvements.

## Sources

- https://langfuse.com/docs
- https://langfuse.com/docs/evaluation/get-started/offline
- https://docs.vllm.ai/en/latest/usage/metrics/
