# fission-example

## With Istio

```bash
export FISSION_NAMESPACE="fission"
kubectl create namespace $FISSION_NAMESPACE
kubectl label namespace $FISSION_NAMESPACE istio-injection=enabled
kubectl config set-context $(kubectl config current-context) --namespace=$FISSION_NAMESPACE
```
