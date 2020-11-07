using System;
using System.Net;
using System.Net.Http;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OReilly.Controllers;
using OReilly.Models;

namespace UnitTestOReilly
{
    [TestClass]
    public class TestNewGreetingController
    {
        [TestMethod]
        public void TestNewGreetingAdd()
        {
            var greetingName = "newgreeting";
            var greetingMessage = "Hello Test!";

            var fakeRequest = new HttpRequestMessage(HttpMethod.Post,
                "http://localhost:9000/api/greeting");

            var greeting = new Greeting { Name = greetingName,
                Message = greetingMessage };

            var service = new GreetingController();
            service.Request = fakeRequest;

            var response = service.PostGreeting(greeting);

            Assert.IsNotNull(response);
            Assert.Equals(HttpStatusCode.Created, response.StatusCode);
            Assert.Equals(new Uri("http://localhost:9000/api/greeting/newgreeting"), 
                response.Headers.Location);
        }
    }
}
