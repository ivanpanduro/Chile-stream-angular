using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChileStream.API.Models;

namespace ChileStream.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PeliculasController : ControllerBase
{
    private readonly ChileStreamDbContext _context;

    public PeliculasController(ChileStreamDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Pelicula>>> GetPeliculas()
    {
        return await _context.Pelicula.ToListAsync();
    }

    [HttpPost]
    public async Task<IActionResult> AddPelicula(Pelicula pelicula)
    {
        _context.Pelicula.Add(pelicula);
        await _context.SaveChangesAsync();
        return Ok(pelicula);
    }
}
