using SPA.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SPA.Web.Controllers
{
    public class HomeController : Controller
    {
        private ProductRepository ProductRepo = new ProductRepository();
        //
        // GET: /Home/
        public ActionResult Index()
        {
            return View();
        }
	}
}