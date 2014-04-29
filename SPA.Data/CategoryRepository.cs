using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GenericRepository.EF;

using SPA.Model;

namespace SPA.Data
{
    public class CategoryRepository : Repository<ShowcaseContext, Category>
    {
    }
}
