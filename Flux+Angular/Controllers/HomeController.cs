using System.Collections.Generic;
using System.Web.Mvc;
using Flux_Angular.Models;

namespace Flux_Angular.Controllers
{
    public class HomeController : Controller
    {
        [AllowAnonymous]
        [HttpGet]
        [Route("")]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("Catalog")]
        public ActionResult Catalog()
        {
            var result = new List<CardModel>
            {
                new CardModel {Name = "Magic Johnson", Price = 20, Image = "card_1.png"},
                new CardModel {Name = "Larry Bird", Price = 30, Image = "card_2.png"},
                new CardModel {Name = "Michael Jordan", Price = 40, Image = "card_3.png"},
            };
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [Route("Comments")]
        public ActionResult Comments(CommentModel model)
        {
            return Json("", JsonRequestBehavior.AllowGet);
        }
    }
}