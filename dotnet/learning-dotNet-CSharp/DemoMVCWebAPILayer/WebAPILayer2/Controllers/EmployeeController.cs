using ModelLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPILayer2.Controllers
{
    public class EmployeeController : ApiController
    {
        List<Employee> employees;

        public EmployeeController()
        {
            employees = new List<Employee>();
            employees.Add(new Employee { ID = 1, Name = "Durval", ContactNumber = 123456789, Address = "CTOR 1" });
            employees.Add(new Employee { ID = 2, Name = "Emerson", ContactNumber = 987654321, Address = "CTOR 2" });
        }

        [Filters.CustomAuthentication]
        public IEnumerable<Employee> Get() {
            return employees;
        }

        [Filters.CustomAuthentication]
        public Employee Get(int id) {
            return employees.FirstOrDefault<Employee>(x => x.ID.Equals(id));
        }
    }
}
