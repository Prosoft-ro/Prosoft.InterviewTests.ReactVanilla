﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Prosoft.InterviewTests.ReactVanilla.Server.Controllers {
    public class DefaultController : Controller {
        public IActionResult Index() {
            return View();
        }
    }
}