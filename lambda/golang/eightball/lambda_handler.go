package main

import (
	"net/http"

	"github.com/aws/aws-lambda-go/lambda"
)

type Response struct {
	StatusCode int               `json:"statusCode"`
	Headers    map[string]string `json:"headers"`
	Body       string            `json:"body"`
}

func HandleRequest() (Response, error) {
	answer := "That's a great question! Unfortunately it requires a great answer that I don't currently have. Maybe ask something easier?"

	req, _ := http.NewRequest("GET", "https://api.wit.ai/message?v=20190804&q=", nil)
	req.Header.Add("Authorization", "Bearer H5QV4QBU4V7WDXGDFCU3IDO4JDMMAMUM")

	client := &http.Client{}
	resp, _ := client.Do(req)

	return Response{
		StatusCode: 200,
		Headers: map[string]string{
			"Access-Control-Allow-Origin": "*",
		},
		Body: answer,
	}, nil
}

func main() {
	lambda.Start(HandleRequest)
}
