# LLMOps reference scenario

Status: proposed architecture, not a delivered client project or measured production deployment.

Internal text assistant hosted in the customer's Kubernetes environment. Kong Gateway Enterprise with licensed AI plugins fronts vLLM; corporate authentication and application policies control model access. Langfuse is self-hosted and instrumented in the application for tracing and offline evaluations. Prometheus/Grafana track inference performance. Versioned configuration and prompts pass evaluation before deployment.

This uses self-managed Kong Gateway Services, Routes and AI plugins, not the Konnect-managed AI Gateway control plane. Confirm compatible versions, licensing and subscription availability for the customer's jurisdiction before implementation. Do not infer full feature parity with Konnect.

Pilot acceptance criteria: representative de-identified evaluation set, answer quality, p95 latency, time to first token, GPU utilization, recovery checks and tested rollback. Thresholds and hardware are selected with the customer. Configure data masking, retention and access to traces. Token quotas do not measure GPU costs. No guaranteed savings or throughput are claimed.

## Primary references

- [Kong on-prem AI configuration](https://developer.konghq.com/ai-gateway/configure-on-prem/)
- [Kong Gateway Enterprise](https://konghq.com/products/kong-enterprise)
- [vLLM metrics](https://docs.vllm.ai/en/latest/usage/metrics/)
- [Langfuse offline evaluation](https://langfuse.com/docs/evaluation/get-started/offline)
- [Langfuse self-hosting](https://langfuse.com/self-hosting)
