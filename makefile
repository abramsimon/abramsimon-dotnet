DOCKER_CREDENTIALS=`cat .dockerhub_credentials`
TAG_VERSION=$(shell date +%Y-%m-%d-%H-%M)
TAG_INTERVIEW_UI=interview-ui:$(TAG_VERSION)
REPO_TAG=abramsimon/myimgs:interview-ui-$(TAG_VERSION)

docker_build:
	docker build -t interview-ui -t abramsimon/interview-ui ./interview-ui/

docker_push:
	cd interview-ui; npm install; npm run-script build; cd ..;
	docker build -t $(TAG_INTERVIEW_UI) -t $(REPO_TAG) ./interview-ui/
	cat ./.dockerhub_credentials | docker login -u abramsimon -p "$(DOCKER_CREDENTIALS)"
	docker push "$(REPO_TAG)"
