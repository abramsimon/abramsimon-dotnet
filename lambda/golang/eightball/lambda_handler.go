package main

import (
	"net/http"

	"encoding/json"

	"github.com/aws/aws-lambda-go/lambda"
)

type Outcome struct {
	Text string `json:"_text"`
}

type Response struct {
	StatusCode int               `json:"statusCode"`
	Headers    map[string]string `json:"headers"`
	Body       string            `json:"body"`
}

func HandleRequest() (Response, error) {
	var err error

	answer := "That's a great question! Unfortunately it requires a great answer that I don't currently have. Maybe ask something easier?"

	req, err := http.NewRequest("GET", "https://api.wit.ai/message?v=20190804&q=", nil)
	if err != nil {
		return Response{}, err
	}
	req.Header.Add("Authorization", "Bearer H5QV4QBU4V7WDXGDFCU3IDO4JDMMAMUM")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return Response{}, err
	}

	outcomes := []Outcome{}

	dec := json.NewDecoder(resp.Body)
	err = dec.Decode(&outcomes)
	if err != nil {
		return Response{}, err
	}

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
