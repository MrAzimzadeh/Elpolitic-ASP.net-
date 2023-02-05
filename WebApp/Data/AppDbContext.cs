using Microsoft.EntityFrameworkCore;
using WebApp.Models;

namespace WebApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }
        public DbSet<About> Abouts { get; set; }
        public DbSet<Banner> Banners { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Events> Events { get; set; }
        public DbSet<Galery> Galeries { get; set; }
        public DbSet<Issues> Issues { get; set; }
        public DbSet<Plans> Plans { get; set; }
        public DbSet<Who> Whos { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<GaleryCategory> GaleryCategories { get; set; }
        
    }
}