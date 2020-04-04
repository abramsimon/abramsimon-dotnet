.PHONY: deploy-lambda-go deploy-ui deploy-all

deploy-lambda-go:
	cd ./lambda/golang/eightball && \
	env GOOS=linux GOARCH=amd64 go build -o ./dist/eightball lambda_handler.go && \
	cd ./dist && \
	zip eightball.zip eightball && \
	aws lambda update-function-code --function-name eightball-golang --zip-file fileb://./eightball.zip --publish

deploy-ui:
	cd ./ui-rca-ts && \
	npm run build && \
	aws s3 cp ./build s3://www.abramsimon.com/ --recursive --acl public-read

deploy-all: deploy-lambda-go deploy-ui