using WebApp.Models;

namespace WebApp.ViewModels
{
    public class HomeVM
    {
        public List<Banner> Banners { get; set; }
        public List<Who> Whos { get; set; }
        public List<About> Abouts { get; set; }
        public Issues Issues { get; set; }
        public List<Plans> Plans { get; set; }
        public List<Events> Events { get; set; }
    }

}