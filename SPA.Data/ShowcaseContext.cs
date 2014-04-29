using SPA.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SPA.Data
{
    public class ShowcaseContext : DbContext
    {
        public ShowcaseContext() :
            base("ShowcaseConnectionString")
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
