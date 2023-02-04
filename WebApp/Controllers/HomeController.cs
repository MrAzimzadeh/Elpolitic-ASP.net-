using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using WebApp.Data;
using WebApp.Models;
using WebApp.ViewModels;

namespace WebApp.Controllers;

public class HomeController : Controller
{
    private readonly AppDbContext _context;
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger, AppDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index()
    {
        var slide = _context.Banners.ToList();
        var who = _context.Whos.OrderBy(x => x.Id).ToList();
        var about = _context.Abouts.ToList();
        var issu = _context.Issues.OrderByDescending(x => x.Id).First();
        HomeVM homeVM = new()
        {
            Banners = slide,
            Whos = who,
            Abouts = about,
            Issues = issu
        };
        return View(homeVM);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
