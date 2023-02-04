namespace WebApp.Models
{
    public class Events
    {
        public int Id { get; set; }
        public string HeadText { get; set; }
        public string PhotoUrl { get; set; }
        public string Title { get; set; }
        public DateTime PublishDate { get; set; } =DateTime.Now;
        public string Location { get; set; }
    }
}