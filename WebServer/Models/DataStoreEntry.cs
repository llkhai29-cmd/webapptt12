using System;

namespace WebServer.Models
{
    public class DataStoreEntry
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string JsonData { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
