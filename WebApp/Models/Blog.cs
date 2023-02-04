namespace WebApp.Models
{
    public class Blog
    {
        public int Id { get; set; }
        public string PhotoUrl { get; set; }
        public string Title { get; set; }
        public string UserName { get; set; }
        public DateTime PublishDate { get; set; }
        public string Content { get; set; }

    }
}