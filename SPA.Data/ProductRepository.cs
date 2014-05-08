using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GenericRepository.EF;

using SPA.Model;

namespace SPA.Data
{
    public class ProductRepository : Repository<ShowcaseContext, Product>
    {
        public void GetProducts()
        {
            var results = from product in Context.Products
                          from category in Context.Categories
                          where product.Category.Id == category.Id
                          select new
                          {
                              Id = product.Id,
                              Name = product.Name,
                              Quantity = product.Quantity,
                              Description = product.Description,
                              CategoryId = product.Category.Id,
                              CategoryName = product.Category.Name
                          };
        }
    }
}
