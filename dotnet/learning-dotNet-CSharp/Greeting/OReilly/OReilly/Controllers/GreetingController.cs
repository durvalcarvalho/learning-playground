﻿using OReilly.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OReilly.Controllers
{
    public class GreetingController : ApiController
    {
        public static List<Greeting> _greetings = new List<Greeting>();

        public HttpResponseMessage PostGreeting(Greeting greeting)
        {
            _greetings.Add(greeting);

            var greetingLocation = new Uri(this.Request.RequestUri, 
                "greeting/" + greeting.Name);

            var response = this.Request.CreateResponse(HttpStatusCode.Created);

            response.Headers.Location = greetingLocation;

            return response;
        }

        public string GetGreeting(string id) {
            var greeting =  _greetings.FirstOrDefault(g => g.Name == id);

            if (greeting == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);

            return greeting.Message;
        }
    }
}
