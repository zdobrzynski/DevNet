using System;
using Microsoft.AspNetCore.Mvc;

namespace NorthwindZDobrzynskiMain.Controllers {
    public class HomeController : Controller
    {
        public ActionResult Index() => View();
        
    }
}