using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Amazon.Lambda.Core;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace HelloWorld
{
    public class Function
    {
        
        /// <summary>
        /// A simple function that takes a string and does a ToUpper
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        public FunctionHandlerResponse FunctionHandler(ILambdaContext context)
        {
            return new FunctionHandlerResponse {
                statusCode = 200,
                headers = new Dictionary<string, string> {
			        {"Access-Control-Allow-Origin", "*"},
                },
                body = "var identity = \"Abram Simon\";",
            };
        }
    }

    public class FunctionHandlerResponse
    {
        public int statusCode;
        public Dictionary<string, string> headers;
        public string body;
    }
}
