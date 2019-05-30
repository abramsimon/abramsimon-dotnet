build-go:
	cd ./golang/helloworld && \
	env GOOS=linux GOARCH=amd64 go build -o ./dist/hello lambda_handler.go && \
	cd ./dist && \
	zip hello.zip hello