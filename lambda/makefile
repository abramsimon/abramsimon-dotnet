build-go:
	cd ./golang/helloworld && \
	env GOOS=linux GOARCH=amd64 go build -o ./dist/hello lambda_handler.go && \
	cd ./dist && \
	zip hello.zip hello

build-dotnet:
	cd ./dotnet/HelloWorld/src/HelloWorld && \
	dotnet publish -c Release -o ./dist /p:GenerateRuntimeConfigurationFiles=true && \
	cd ./dist && \
	zip -r hello.zip .