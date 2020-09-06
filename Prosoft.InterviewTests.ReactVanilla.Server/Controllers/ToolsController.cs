using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prosoft.InterviewTests.ReactVanilla.Server.Controllers {
    [Route("Api/[controller]/[action]")]
    public class ToolsController : Controller {

        public JsonResult Get(string key) {

            if (key != "fg08") {
                return Json(new {
                    Status = "error",
                    Id = "InvalidKey",
                    ErrorMessage = "The provided key is invalid"
                });
            }

            return Json(new {
                Status = "success",
                Tools = new[] { "Hammer", "Axe", "Drill" }
            });
        }

    }
}
