GCR_CREDENTIALS=`cat .gcr_credentials.json`
TAG_VERSION=$(shell date +%Y-%m-%d-%H-%M)
DOCKER_TAG="gcr.io/abramsimon-com/interview-ui:$(TAG_VERSION)"

docker_build:
	docker build -t interview-ui -t gcr.io/abramsimon-com/interview-ui ./interview-ui/

docker_push:
	cd interview-ui; npm run-script build;
	docker login -u _json_key -p "$(GCR_CREDENTIALS)" https://gcr.io
	docker build -t interview-ui -t "$(DOCKER_TAG)" ./interview-ui/
	docker push "$(DOCKER_TAG)"

kube_deploy:
	kubectl apply -f .kubernetes-deployment.yaml

kube_create:
	kubectl create -f .kubernetes-deployment.yaml
	kubectl create -f .kubernetes-service.yaml
	kubectl create -f .kubernetes-ingress.yaml 