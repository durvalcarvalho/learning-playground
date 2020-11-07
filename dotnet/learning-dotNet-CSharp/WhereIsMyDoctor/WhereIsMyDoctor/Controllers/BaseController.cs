using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WhereIsMyDoctor.Filtros;

namespace WhereIsMyDoctor.Controllers
{
    [AutorizacaoDeAcesso]
    public class BaseController : Controller
    {
        protected override void OnActionExecuted(ActionExecutedContext filterContext) {
            base.OnActionExecuted(filterContext);
        }
    }
}