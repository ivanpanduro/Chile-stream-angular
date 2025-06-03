using ChileStream.API.Models;
using Microsoft.EntityFrameworkCore;



public class ChileStreamDbContext : DbContext
{
    public ChileStreamDbContext(DbContextOptions<ChileStreamDbContext> options) : base(options) {}

    public DbSet<Usuario> Usuario { get; set; }
    public DbSet<Pelicula> Pelicula{ get; set; }
    public DbSet<Opinion> Opinion{ get; set; }
}
