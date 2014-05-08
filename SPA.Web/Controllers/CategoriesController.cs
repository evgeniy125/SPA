using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using SPA.Data;
using SPA.Model;

namespace SPA.Web.Controllers
{
    public class CategoriesController : ApiController
    {
        private CategoryRepository categoryRepo = new CategoryRepository();

        // GET api/categories
        public IEnumerable<Category> Get()
        {
            return categoryRepo.All;
        }

        // GET api/categories/5
        public string Get(int id)
        {
            return "value";
        }
    }
}
