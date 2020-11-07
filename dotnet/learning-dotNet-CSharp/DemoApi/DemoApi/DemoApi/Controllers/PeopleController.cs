using DemoApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DemoApi.Controllers
{
    public class PeopleController : ApiController
    {
        List<Person> people = new List<Person>();

        public PeopleController()
        {
            people.Add(new Person { FirstName = "Durval", LastName = "Carvalho", Id = 1 });
            people.Add(new Person { FirstName = "Maria", LastName = "Souza", Id = 2 });
            people.Add(new Person { FirstName = "Antonio", LastName = "Felipe", Id = 3 });
        }

        // GET: api/People
        public List<Person> Get() => people;

        // GET: api/People/5
        public Person Get(int id) {
            return people.Where(x => x.Id == id).FirstOrDefault();
        }

        // POST: api/People
        public void Post(Person person) => people.Add(person);

        // PUT: api/People/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/People/5
        public void Delete(int id)
        {
        }

        [Route("api/people/GetFirstNames/")]
        public List<string> GetFirstNames()
        {
            List<string> output = new List<string>();

            foreach(var p in people)
                output.Add(p.FirstName);

            return output;
        }
    }
}
