.PHONY: deploy

deploy:
	npm run build
	aws s3 cp ./build s3://www.abramsimon.com/ --recursive --acl public-read