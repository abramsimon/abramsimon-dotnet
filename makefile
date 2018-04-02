GCR_CREDENTIALS=`cat .gcr_credentials.json`

docker_build:
	docker build -t interview-ui -t gcr.io/abramsimon-com/interview-ui ./interview-ui/

docker_push:
	docker login -u _json_key -p "$(GCR_CREDENTIALS)" https://gcr.io
	docker build -t interview-ui -t gcr.io/abramsimon-com/interview-ui ./interview-ui/
	docker push gcr.io/abramsimon-com/interview-ui

kube_setup:
	kubectl create -f .kubernetes-deployment.yaml
	kubectl create -f .kubernetes-service.yaml
	kubectl create -f .kubernetes-ingress.yaml 