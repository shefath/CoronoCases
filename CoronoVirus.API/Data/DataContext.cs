using CoronoVirus.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CoronoVirus.API.Data
{
    public class DataContext : DbContext 
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {            
        }
        public DbSet<Cases> Cases { get; set; }
    }
}