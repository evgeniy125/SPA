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
    public class ProductsController : ApiController
    {
        private ProductRepository productRepo = new ProductRepository();

        public IEnumerable<Product> Get()
        {
            return productRepo.All;
        }

        // GET api/products/2
        [HttpGet]
        [ActionName("details")]
        public Product GetProduct(int id)
        {
            return productRepo.Find(id);
        }

        //Поиск продуктов по категории
        //GET api/products/category/2
        [ActionName("category")]
        [HttpGet]
        public IEnumerable<Product> GetProductsByCategory(int id)
        {
            return productRepo.All.Where(p => p.Category.Id == id);
        }
    }
}
