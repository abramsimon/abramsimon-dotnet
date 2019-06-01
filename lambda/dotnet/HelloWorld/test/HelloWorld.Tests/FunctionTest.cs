using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Xunit;
using Amazon.Lambda.Core;
using Amazon.Lambda.TestUtilities;
using FluentAssertions;
using HelloWorld;

namespace HelloWorld.Tests
{
    public class FunctionTest
    {
        [Fact]
        public void FunctionHandler_returns_lame_identity_statement()
        {
            // arrange
            var function = new Function();
            var context = new TestLambdaContext();

            // act
            var result = function.FunctionHandler(context);

            // assert
            result.Should().BeEquivalentTo(new FunctionHandlerResponse {
                statusCode = 200,
                headers = new Dictionary<string, string> {
			        {"Access-Control-Allow-Origin", "*"},
                },
                body = "var identity = \"Abram Simon\";",
            });
        }
    }
}
