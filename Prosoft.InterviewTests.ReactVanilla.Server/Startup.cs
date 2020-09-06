using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Prosoft.InterviewTests.ReactVanilla.Server {
    public class Startup {

        IConfiguration Configuration { get; set; }
        IWebHostEnvironment Environment { get; set; }

        public Startup(
            IConfiguration configuration,
            IWebHostEnvironment environment
        ) {
            Configuration = configuration;
            Environment = environment;
        }

        public void ConfigureServices(IServiceCollection services) {

            var mvcBuilder = services.AddMvc(options => options.EnableEndpointRouting = false);

            if (Environment.IsDevelopment()) {
                //Disable caching of Index.cshtml. That conflicts with webpack watch.
                mvcBuilder.AddRazorRuntimeCompilation();
            }
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();

            app.UseMvc(routes => {
                routes.MapRoute("default", "{controller=Default}/{action=Index}");
                routes.MapRoute("catch-all", "{*url}", new { controller = "Default", action = "Index" });
            });
        }
    }
}
