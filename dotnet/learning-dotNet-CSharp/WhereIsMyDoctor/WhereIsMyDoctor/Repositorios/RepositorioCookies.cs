using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WhereIsMyDoctor.Repositorios
{
    public class RepositorioCookies
    {
        public static void RegistraCookieAutenticacao(long IDUsuario)
        {
            HttpCookie UserCookie = new HttpCookie("UserCookieAuthentication");

            UserCookie.Values["IDUsuario"] = WhereIsMyDoctor.Repositorios.RepositorioCriptografia.Criptografar(IDUsuario.ToString());

            UserCookie.Expires = DateTime.Now.AddDays(1);

            HttpContext.Current.Response.Cookies.Add(UserCookie);
        }
    }
}