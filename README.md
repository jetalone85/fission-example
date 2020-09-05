# fission-example

## Istio

<https://istio.io/latest/docs/setup/getting-started/#download>

```bash
curl -L https://istio.io/downloadIstio | sh -
```

```bash
cd istio-1.7.0
```

```bash
export PATH=$PWD/bin:$PATH
```

```bash
istioctl install --set profile=default
```

## With Istio

<https://docs.fission.io/docs/usage/enabling-istio-on-fission/>

```bash
export FISSION_NAMESPACE="fission"
kubectl create namespace $FISSION_NAMESPACE
kubectl label namespace $FISSION_NAMESPACE istio-injection=enabled
kubectl config set-context $(kubectl config current-context) --namespace=$FISSION_NAMESPACE
```

```bash
helm install fission --namespace $FISSION_NAMESPACE --set enableIstio=true \
    https://github.com/fission/fission/releases/download/1.10.0/fission-all-1.10.0.tgz
```

```bash
fission env create --name nodejs --image fission/node-env:latest
```

```bash
fission fn create --name hello --env nodejs --code hello.js --method GET
```

```bash
fission route create --name hello --method GET --url /hello --function hello
```
