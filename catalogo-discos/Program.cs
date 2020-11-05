using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using catalogo_discos.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace catalogo_discos
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //using (var db = new AlbumContext())
            //{
            //    db.Add(new Album { });
            //    db.SaveChanges();
            //}
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
