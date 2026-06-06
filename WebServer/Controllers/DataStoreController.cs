using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebServer.Models;

namespace WebServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataStoreController : ControllerBase
    {
        private readonly DataStoreContext _context;

        public DataStoreController(DataStoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetLatest()
        {
            var entry = await _context.DataStores
                .OrderByDescending(x => x.UpdatedAt)
                .FirstOrDefaultAsync();

            if (entry == null)
            {
                return NotFound(new { message = "No datastore saved yet." });
            }

            return Ok(new
            {
                entry.Name,
                entry.JsonData,
                entry.UpdatedAt
            });
        }

        [HttpPost]
        public async Task<IActionResult> Save([FromBody] DataStorePayload payload)
        {
            if (payload == null || string.IsNullOrWhiteSpace(payload.Name) || string.IsNullOrWhiteSpace(payload.JsonData))
            {
                return BadRequest(new { message = "Name and JsonData are required." });
            }

            var entry = new DataStoreEntry
            {
                Name = payload.Name,
                JsonData = payload.JsonData,
                UpdatedAt = DateTime.UtcNow
            };

            _context.DataStores.Add(entry);
            await _context.SaveChangesAsync();

            return Ok(new { entry.Id, entry.Name, entry.UpdatedAt });
        }

        public class DataStorePayload
        {
            public string Name { get; set; }
            public string JsonData { get; set; }
        }
    }
}
