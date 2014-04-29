using SPA.Data;
using SPA.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SPA.Web.Controllers
{
    public class ProductController : ApiController
    {
        private ProductRepository productRepo = new ProductRepository();

        // GET api/product
        public IEnumerable<Product> Get()
        {
            return productRepo.All;
        }

        // GET api/product/5
        public Product Get(int id)
        {
            return productRepo.Find(id);
        }
    }
}
