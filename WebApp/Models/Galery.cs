namespace WebApp.Models
{
    public class Galery
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PhotoUrl { get; set; }
        public List<GaleryCategory> GaleryCategories { get; set; }
    }
}