namespace SPA.Data.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using SPA.Model;

    internal sealed class Configuration : DbMigrationsConfiguration<SPA.Data.ShowcaseContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ShowcaseContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            for (int i = 0; i < 100; i++)
            {
                context.Products.AddOrUpdate(new Product { Name = "dsgsdg" + i.ToString(), Description = "sdgsdg", Quantity = 4 });
            }
        }
    }
}
