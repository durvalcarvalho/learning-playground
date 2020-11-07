using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using WhereIsMyDoctor.Models;

namespace WhereIsMyDoctor.Repositorios
{
    public class RepositorioUsuarios
    {
        public static bool AutentificarUsuario(string Login, string Senha)
        {
            var senhaCriptografada = RepositorioCriptografia.CriptografaSHA1(Senha);

            try
            {
                using (CadeMeuMedicoDBEntities db = new CadeMeuMedicoDBEntities())
                {
                    var QueryAutenticaUsuarios = db.Usuarios.Where(x => x.Login == Login && x.Senha == senhaCriptografada).SingleOrDefault();

                    if (QueryAutenticaUsuarios == null) 
                        return false;

                    else
                    {
                        RepositorioCookies.RegistraCookieAutenticacao(QueryAutenticaUsuarios.IdUsuario);
                        return true;
                    }
                }
            }

            catch(Exception) {
                return false;
            }
        }

        public static Usuario RecuperaUsuarioPorID(long IdUsuario)
        {
            try
            {
                using (CadeMeuMedicoDBEntities db = new CadeMeuMedicoDBEntities())
                {
                    var Usuario = db.Usuarios.Where(u => u.IdUsuario == IdUsuario).SingleOrDefault();
                    return Usuario;
                }
            }

            catch(Exception) {
                return null;
            }
        }

        public static Usuario VerificaSeOUsuarioEstaLogado()
        {
            var Usuario = HttpContext.Current.Request.Cookies["UserCookieAuthentication"];

            if(Usuario == null) {
                return null;
            }

            else
            {
                string crypt_id = Usuario.Values["IDUsuario"];
                string id = RepositorioCriptografia.Descriptografar(crypt_id);
                long IdUsuario = Convert.ToInt64(id);

                var UsuarioRetornado = RecuperaUsuarioPorID(IdUsuario);

                return UsuarioRetornado;
            }
        }
    }
}