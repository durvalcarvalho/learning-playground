using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WhereIsMyDoctor.Models;

namespace WhereIsMyDoctor.Controllers
{
    public class MedicosController : BaseController
    {
        private CadeMeuMedicoDBEntities db = new CadeMeuMedicoDBEntities();

        // GET: Medicos
        public ActionResult Index()
        {
            List<Medico> medicos = db.Medicos.Include("Cidade").Include("Especialidade").ToList();
            return View(medicos);
        }

        [HttpGet]
        public ActionResult Adicionar()
        {
            ViewBag.IDCidade = new SelectList(db.Cidades, "IDCidade", "Nome");
            ViewBag.IDEspecialidade = new SelectList(db.Especialidades, "IDEspecialidade", "Nome");
            return View();
        }

        [HttpPost]
        public ActionResult Adicionar(Medico medico)
        {
            if(ModelState.IsValid)
            {
                db.Medicos.Add(medico);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.IDCidade = new SelectList(db.Cidades, "IDCidade", "Nome", medico.IDCidade);
            ViewBag.IDEspecidade = new SelectList(db.Especialidades, "IDEspecialidade", "Nome", medico.IDEspecialidade);

            return View(medico);
        }

        public ActionResult Editar(long id)
        {
            Medico medico = db.Medicos.Find(id);
            ViewBag.IDCidade = new SelectList(db.Cidades, "IDCidade", "Nome", medico.IDCidade);
            ViewBag.IDEspecialidade = new SelectList(db.Especialidades, "IDEspecialidade", "Nome", medico.IDEspecialidade);
            return View(medico);
        }

        [HttpPost]
        public ActionResult Editar(Medico medico)
        {
            if(ModelState.IsValid)
            {
                db.Entry(medico).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.IDCidade = new SelectList(db.Cidades, "IDCidade", "Nome", medico.IDCidade);
            ViewBag.IDCidade = new SelectList(db.Especialidades, "IDEspecialidade", "Nome", medico.Especialidade);

            return View(medico);
        }

        [HttpPost]
        public string Excluir(long id)
        {
            try
            {
                Medico medico = db.Medicos.Find(id);
                db.Medicos.Remove(medico);
                db.SaveChanges();
                return Boolean.TrueString;
            }

            catch
            {
                return Boolean.FalseString;
            }
        }
    }
}