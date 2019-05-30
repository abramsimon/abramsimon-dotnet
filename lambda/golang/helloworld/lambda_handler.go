package main

import (
	"github.com/aws/aws-lambda-go/lambda"
)

type Response struct {
	StatusCode int               `json:"statusCode"`
	Headers    map[string]string `json:"headers"`
	Body       string            `json:"body"`
}

func HandleRequest() (Response, error) {
	return Response{
		StatusCode: 200,
		Headers: map[string]string{
			"Access-Control-Allow-Origin": "*",
		},
		Body: `var identity = "Abram Simon"`,
	}, nil
}

func main() {
	lambda.Start(HandleRequest)
}
