using System;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.FileProviders;
using Microsoft.EntityFrameworkCore;
using WebServer.Models;

namespace WebServer
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddDbContext<DataStoreContext>(options =>
                options.UseSqlite("Data Source=datastore.db"));
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            using (var scope = app.ApplicationServices.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<DataStoreContext>();
                db.Database.EnsureCreated();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            var parentDir = Path.GetFullPath(Path.Combine(env.ContentRootPath, ".."));
            app.UseFileServer(new FileServerOptions
            {
                FileProvider = new PhysicalFileProvider(parentDir),
                RequestPath = "",
                EnableDefaultFiles = true
            });
        }
    }
}
