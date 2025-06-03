using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using ChileStream.API.Models;

namespace ChileStream.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OpinionesController : ControllerBase
{
    private readonly ChileStreamDbContext _context;

    public OpinionesController(ChileStreamDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Opinion>>> GetOpiniones()
    {
        return await _context.Opinion.ToListAsync();
    }

    [HttpPost]
    public async Task<IActionResult> AddOpinion(Opinion opinion)
    {
        _context.Opinion.Add(opinion);
        await _context.SaveChangesAsync();
        return Ok(opinion);
    }
}
