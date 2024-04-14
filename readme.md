# ConsumingRest
## Build Instructions:

### Prerequisites:
- Docker Desktop with Kubernetes enabled.

### Deployment Steps:

1. **Start Kubernetes in Docker Desktop:**
   Ensure Kubernetes is running in your Docker desktop application.

2. **Deploy the Quoters Service:**
   Run the following commands to deploy the Quoters service, expose it on Kubernetes, and check its deployment:
```
kubectl run quoters --image=javajon/quoters:1.0.0 --port=8080
kubectl expose pod quoters --name=quoters --port=8080
kubectl get all -l run=quoters
```

### Deploy the Client Application:
1. **Apply the client deployment configuration with the following command:**
```
kubectl apply -f deployment.yaml
```
2. **Check out the Hash code for the pod:**
```
kubectl get pods                      
```
3. **Check Application Logs:**
```
kubectl logs <pod-name>
```
Replace <pod-name> with the actual name of your client pod obtained from the previous step, which should be like <consumingrest-the Hash code K8s automatically generated for the pod>.   