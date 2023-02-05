namespace WebApp.Models
{
    public class GaleryCategory
    {
        public int Id { get; set; }
        public int GaleryId { get; set; }
        public Galery Galery { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }

    }
}