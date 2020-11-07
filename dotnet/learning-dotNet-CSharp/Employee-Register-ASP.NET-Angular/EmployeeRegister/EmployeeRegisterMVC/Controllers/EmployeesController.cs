using EmployeeRegisterMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;

namespace EmployeeRegisterMVC.Controllers
{
    public class EmployeesController : Controller
    {


        // GET: Employees
        public ActionResult Index()
        {
            IEnumerable<Employee> EmployeeList;
            HttpResponseMessage response = GlobalVariables.WebApiClient.GetAsync("Employees").Result;
            EmployeeList = response.Content.ReadAsAsync<IEnumerable<Employee>>().Result;
            return View(EmployeeList);
        }

        public ActionResult AddOrEdit(int id = 0)
        {
            if(id == 0)
                return View(new Employee());

            HttpResponseMessage response = GlobalVariables.WebApiClient.GetAsync("Employees/"+id.ToString()).Result;
            return View(response.Content.ReadAsAsync<Employee>().Result);
        }

        [HttpPost]
        public ActionResult AddOrEdit(Employee employee)
        {
            HttpResponseMessage response;

            if (employee.EmployeeID == 0)
            {
                response = GlobalVariables.WebApiClient.PostAsJsonAsync("Employees", employee).Result;
                TempData["SuccessMessage"] = "Saved Successfully";
                return RedirectToAction("Index");
            }

            response = GlobalVariables.WebApiClient.PutAsJsonAsync("Employees/" + employee.EmployeeID.ToString(), employee).Result;
            TempData["SuccessMessage"] = "Updated Successfully";
            return RedirectToAction("Index");
        }

        public ActionResult Delete(int id)
        {
            HttpResponseMessage response = GlobalVariables.WebApiClient.DeleteAsync("Employees/" + id.ToString()).Result;
            TempData["SuccessMessage"] = "Delete Successfully";
            return RedirectToAction("Index");
        }
    }
}