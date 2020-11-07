using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WhereIsMyDoctor.Repositorios;

namespace WhereIsMyDoctor.Controllers
{
    public class UsuariosController : BaseController
    {
        [HttpGet]
        public ActionResult AutenticacaoDeUsuario(string Login, string Senha)
        {
            if (RepositorioUsuarios.AutentificarUsuario(Login, Senha))
            {
                return Json(
                    new {
                        OK = true,
                        Messagem = "Usuário autenticado. Redirecionando..."
                    }, 
                    JsonRequestBehavior.AllowGet
                );
            }

            else
            {
                return Json(
                    new {
                        OK = false,
                        Mensagem = "Usuário não encontrado. Tente novamente."
                    }, 
                    JsonRequestBehavior.AllowGet
                );
            }
        }
    }
}