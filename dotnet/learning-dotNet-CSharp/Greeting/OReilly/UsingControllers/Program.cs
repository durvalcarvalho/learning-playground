using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace UsingControllers
{
    class Program
    {
        static void Main(string[] args)
        {
            var greetingServiceAddress = new Uri("http://localhost:53344/api/Greeting/durval");
            var client = new HttpClient();
            var result = client.GetAsync(greetingServiceAddress).Result;
            var greeting = result.Content.ReadAsStringAsync().Result;
            Console.WriteLine(greeting);
            Console.ReadLine();
        }
    }
}
