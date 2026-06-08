using Microsoft.EntityFrameworkCore;

namespace WebServer.Models
{
    public class DataStoreContext : DbContext
    {
        public DataStoreContext(DbContextOptions<DataStoreContext> options) : base(options)
        {
        }

        public DbSet<DataStoreEntry> DataStores { get; set; }
    }
}
